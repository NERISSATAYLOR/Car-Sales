import React from 'react';
import { connect } from 'react-redux';
import { increment } from "../actions/index";

const AdditionalFeature = props => {
  const handleIncrease = () => {
    props.increment();
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={handleIncrease}
        className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
}
const mapDispatchToProps = {
  increment
};

export default connect(state => state, mapDispatchToProps)(AdditionalFeature);
