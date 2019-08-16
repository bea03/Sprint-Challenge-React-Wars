import React, { useEffect, useState } from 'react';
import axios from "axios";
import StarWars from "./components/StarWars";

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data.results);
        setCharacter(response.data.results); //without the empty array bracket, this line of code causes it to continually get data from axios
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, []);

  return (
    <div className="App">
    
      {character.map(data => <StarWars key={data.name} name={data.name} height={data.height} />)}
    </div>
  );
}

export default App;
