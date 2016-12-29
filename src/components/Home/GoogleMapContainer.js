import React, {PropTypes} from 'react';
import Map from '../common/Map';

export const GoogleMapContainer = () => {
  // TODO: JG: center is hardcoded, must use html5 geolocalization to set center
  const location = {
    lat: -34.906501,
    lng: -56.185295
  };

  return (
    <div>
      <Map center={location}/>
    </div>
  );
};

export default GoogleMapContainer;
