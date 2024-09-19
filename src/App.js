import React, { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api'; // Import the API service
import StarshipCard from './StarshipCard'; // Import the StarshipCard component

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await getAllStarships();
      setStarships(data);
    };
    fetchStarships();
  }, []);

  return (
    <div>
      <h1>Star Wars Starships</h1>
      <div className="starship-container">
        {starships.map((starship) => (
          <StarshipCard key={starship.name} name={starship.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
