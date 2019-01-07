import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  state = {
    center: {
      lat: '',
      lng: ''
    }
  }

  renderChildren(){
    console.log('children', this.map)
    const {children} = this.props;

    if (!children) return

    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.map,
        google: this.google
      });
    })
  }

  getLocation() {

    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log('inside')
          this.setState({
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          })
          resolve();
        })
      } else {
        this.setState({
          center: {
            lat: 29.756846,
            lng: -95.363444
          }
        })
        resolve();
      }
    })
  }

  onScriptLoad() {
    console.log(this.props)
    this.google = window.google
    this.map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      {
        center: this.state.center,
        zoom: 13
      });
  }

  componentDidMount() {

    this.getLocation().then(() => {

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

    })

  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }} id={this.props.id}>
        {this.renderChildren()}
      </div>
    );
  }
}

export default Map