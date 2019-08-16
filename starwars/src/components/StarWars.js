import React from "react";
import "../App.scss"
import { Card } from 'semantic-ui-react';

function StarWars(props) {
  console.log(props);
  return (
      <Card className="cards">
          <Card.Header className="name">{props.name}</Card.Header>
          <Card.Description className="height">Height: {props.height}</Card.Description>
      </Card>
  );
}

export default StarWars;
