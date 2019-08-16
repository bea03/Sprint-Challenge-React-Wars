import React from "react";
//import { Image } from 'semantic-ui-react';
import './StarWars.scss';

function StarWars(props) {
  console.log(props);
  return (
      <div className="cards">
          <h2>{props.name}</h2>
          <p>{props.height}</p>
      </div>
  );
}


export default StarWars;
