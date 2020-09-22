import React from "react";
import Card from "./Card";
import { connect } from "react-redux";

const Sum = (props) => {
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

function mapStateToProps(state) {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  };
}

export default connect(mapStateToProps)(Sum);
