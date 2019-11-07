import React from 'react';
import { connect } from "react-redux";
import AddedFeature from './AddedFeature';
import { decrement } from '../actions/index';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
          <p>You can purchase items from the store.</p>
        )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    car: state.car,
    features: state.car.features,
    item: state.car.features.item

  }

}

export default connect(mapStateToProps, { decrement })(AddedFeatures);
