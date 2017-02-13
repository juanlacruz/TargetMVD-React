import { connect } from 'react-redux';
import Map from '../components/common/Map';
import { addNewMarker } from '../actions/targetActions';

const mapStateToProps = (state) => {
  return {
    markers: state.mapReducer.markers,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addMarker: (markerData) => dispatch(addNewMarker(markerData)),
});

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);

export default MapContainer;
