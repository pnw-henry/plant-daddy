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
  const [favoriteList, setFavoriteList] = useState([]);

  const API = "http://localhost:3001/plants";

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((plants) => {
        setPlants(plants);
      });
  }, []);

  function onFavoriteClick(plantClicked) {
    console.log("favorite clicked", plantClicked);
    setFavoriteList([...favoriteList, plantClicked]);
  }

  console.log("favorite list inside app", favoriteList);

  function onUnfavoriteClick(plantClicked) {
    console.log("unfavorite clicked", plantClicked);
    setFavoriteList(favoriteList.filter((plant) => plant !== plantClicked));
  }

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
            plants={favoriteList}
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
