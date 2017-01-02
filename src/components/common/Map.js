import React, {PropTypes} from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

class Map extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  render() {
    const mapContainer = <div style={{position: 'absolute', height:'100%', width:'100%'}}></div>;

    return(
      <GoogleMapLoader
      containerElement = {mapContainer}
      googleMapElement = {
        <GoogleMap
          defaultZoom = {15}
          defaultCenter={{ lat: 46.2017559, lng: 6.1466014 }}
          options={{streetViewControl: false, mapTypeControl: false}}>
        </GoogleMap>
      } />
    );
  }
}

export default Map;
