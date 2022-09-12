import Header from "./Header";
import Navigation from "./Navigation";
import Home from "./Home";
import PlantSpace from "./PlantSpace";
import PlantForm from "./PlantForm";
import Favorites from "./Favorites";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Switch>
        <Route path="/plantspace">
          <PlantSpace />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/mylist">
          <PlantForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
