import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

const Draw = (props) => {
  const { min, max } = props;
  const randomNUmber = parseInt(Math.random() * (max - min)) + min;
  return (
    <Card title="Draw" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{randomNUmber}</strong>
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  };
}

export default connect(mapStateToProps)(Draw);
