import { useState, useEffect } from "react";
import PlantList from "./PlantList";

function PlantSpace() {
  const [plants, setPlants] = useState([]);
  const [favorites, setFavorites] = useState("");

  const API = "http://localhost:3001/plants";

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((plants) => {
        console.log(plants);
        setPlants(plants);
      });
  }, []);

  return (
    <div className="plantspace">
      <PlantList plants={plants} />
    </div>
  );
}

export default PlantSpace;
