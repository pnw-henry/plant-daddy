import React, { useState, useEffect } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Home from "./Home";
import PlantSpace from "./PlantSpace";
import UserPlants from "./UserPlants";
import Favorites from "./Favorites";
import { Route, Switch } from "react-router-dom";

function App() {
  const [plants, setPlants] = useState([]);
  //Favorites list held in state to be used in future versions of the app
  const [favoriteList, setFavoriteList] = useState([]);

  const API = "http://localhost:3001/plants";

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((plants) => {
        setPlants(plants);
      });
  }, []);

  //Adds plant clicked on by user to favoriteList
  function onFavoriteClick(plantClicked) {
    setFavoriteList([...favoriteList, plantClicked]);
  }

  //Removes plant clicked on by user from FavoriteList
  function onUnfavoriteClick(plantClicked) {
    setFavoriteList(favoriteList.filter((plant) => plant !== plantClicked));
  }

  console.log(favoriteList);

  return (
    <div className="app">
      <Header />
      <Navigation />
      <Switch>
        <Route path="/plantspace">
          <PlantSpace
            plants={plants}
            onFavoriteClick={onFavoriteClick}
            onUnfavoriteClick={onUnfavoriteClick}
          />
        </Route>
        <Route path="/favorites">
          <Favorites
            plants={plants.filter((plant) => plant.favorite)}
            onUnfavoriteClick={onUnfavoriteClick}
          />
        </Route>
        <Route path="/mylist">
          <UserPlants />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
