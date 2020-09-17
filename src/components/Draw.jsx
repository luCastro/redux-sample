import React from "react";
import Card from "./Card";

export default (props) => {
  const { min, max } = props;
  const random = parseInt(Math.random() * (max - min) + min);
  return (
    <Card title="Draw" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{random}</strong>
        </span>
      </div>
    </Card>
  );
};
