import "./Interval.css";
import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { updatedMin, updatedMax } from "../store/actions/numbers";

const Interval = (props) => {
  const { min, max } = props;

  return (
    <Card title="Number Interval" red>
      <div className="Interval">
        <span>
          <strong>Minimum:</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.dispatchNumberMin(+e.target.value)}
          />
        </span>
        <span>
          <strong>Maximun:</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.dispatchNumberMax(+e.target.value)}
          />
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

function mapDispatchToProps(dispatch) {
  return {
    dispatchNumberMin(newValue) {
      const action = updatedMin(newValue);
      dispatch(action);
    },

    dispatchNumberMax(newValue) {
      const action = updatedMax(newValue);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval);
