import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

export class App extends Component {

  state = {
    lat: '',
    lng: '',
    showInfo: false,
    activeMarker: {},
    selectedPlace: {}
  }

  componentDidMount() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      })
    } else {
      this.setState({
        lat: 29.756846,
        lng: -95.363444
      })
    }
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        center={{
          lat: this.state.lat,
          lng: this.state.lng
        }}>

        <Marker
          position={{ lat: this.state.lat, lng: this.state.lng }}
          onClick={this.onMarkerClick}
          name={'test'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>

      </Map >
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDo6tEEKB4ZkOL-DN7iFCHhwBwJahz7ax8'
})(App)