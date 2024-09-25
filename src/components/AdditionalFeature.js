import React from 'react';
import { connect } from 'react-redux';
import { increment } from "../actions/index";

const AdditionalFeature = props => {
  // const handleIncrease = () => {
  //   props.increment();
  // }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => props.increment(props.feature)}
        className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
}
const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}
export default connect(mapStateToProps, { increment })(AdditionalFeature);
