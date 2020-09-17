import "./Interval.css";
import React from "react";
import Card from "./Card";

export default (props) => {
  const { min, max } = props;
  return (
    <Card title="Number Interval" red>
      <div className="Interval">
        <span>
          <strong>Minimum:</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.onChangedMin(+e.target.value)}
          />
        </span>
        <span>
          <strong>Maximun:</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.onChangedMax(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};
