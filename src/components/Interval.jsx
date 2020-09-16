import "./Interval.css";
import React from "react";
import Card from "./Card";

export default (props) => {
  return (
    <Card title="Number Interval" red>
      <div className="Interval">
        <span>
          <strong>Minimum:</strong>
          <input type="number" value={0} readOnly />
        </span>
        <span>
          <strong>Maximun:</strong>
          <input type="number" value={10} readOnly />
        </span>
      </div>
    </Card>
  );
};
