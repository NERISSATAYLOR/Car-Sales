import React from 'react';
import { connect } from 'react-redux';
import { decrement } from '../actions';


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => { props.decrement(props.feature) }} className="button">X</button>
      {props.feature.name}(-{props.feature.price})
    </li>
  );
}
const mapStateToProps = state => {
  console.log('mapstatetoprops:', state)
  return {
    additionPrice: state.additionalPrice,
    car: state.car,
    features: state.car.features,


  }

}
export default connect(mapStateToProps, { decrement })(AddedFeature);
