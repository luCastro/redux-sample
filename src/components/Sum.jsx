import React from "react";
import Card from "./Card";

export default (props) => {
  //Destructoring way to get the props and create a variable
  const { min, max } = props;
  return (
    <Card title="Sum" blue>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{min + max}</strong>
        </span>
      </div>
    </Card>
  );
};
