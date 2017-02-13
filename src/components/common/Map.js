import React, { PropTypes } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import '../../styles/Common.scss';

class Map extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onMapClick = this.onMapClick.bind(this);
  }

  onMapClick(e) {
    let lat = parseFloat(e.latLng.lat().toFixed(6));
    let lng = parseFloat(e.latLng.lng().toFixed(6));
    let marker = {
      lat: lat,
      lng: lng,
      defaultAnimation: 2,
    };
    this.props.addMarker(marker);
  }

  render() {
    const mapContainer = <div className="map-container"/>;
    const { markers } = this.props;
    let markersShow = markers.map((venue, index) => {
      const marker = {
        position: {
          lat: venue.lat,
          lng: venue.lng,
          key: index,
        }
      };
      return <Marker key={index} {...marker}/>;
    });
    return (
        <GoogleMapLoader
          containerElement = {mapContainer}
          googleMapElement = {
            <GoogleMap
              defaultZoom = {15}
              defaultCenter={{ lat: -34.906501, lng: -56.185295 }}
              options={{ streetViewControl: false, mapTypeControl: false }}
              onClick = {this.onMapClick}>
                { markersShow }
            </GoogleMap>
          }
        />
    );
  }
}

Map.propTypes = {
  addMarker: PropTypes.func.isRequired,
  markers: PropTypes.array.isRequired
};

export default Map;
