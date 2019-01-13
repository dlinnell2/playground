import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    center: {
      lat: 29.756846,
      lng: -95.363444
    },
    map: false
  }

  renderChildren() {
    const { children } = this.props;

    if (!children) return

    if (this.map && this.google) {
      return React.Children.map(children, c => {
        return React.cloneElement(c, {
          map: this.map,
          google: this.google
        });
      })
    }
  }

  getLocation() {

    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        console.log('getting location')
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position)
          this.setState({
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          })
          resolve();
        })
      } 
    })
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById('myMap'),
      {
        center: this.state.center,
        zoom: 13
      });

    this.map = map;
    this.google = window.google;
    this.setState({
      map:true
    })
    this.getLocation();
  }

  componentDidMount() {

    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyDo6tEEKB4ZkOL-DN7iFCHhwBwJahz7ax8`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }

  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }} id='myMap'>
        {this.renderChildren()}
      </div>
    );
  }
}

export default Map