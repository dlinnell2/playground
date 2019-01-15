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

  onScriptLoad() {
    let map = new window.google.maps.Map(
      document.getElementById('myMap'),
      {
        center: this.props.center,
        zoom: 13
      });

    this.map = map;
    this.google = window.google;
    this.setState({
      map: true
    })

    this.google.maps.event.addListener(this.map, 'idle', () => {
      let bounds = this.map.getBounds();
      console.log(bounds)
    })
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.center !== this.props.center && this.state.map) {
      this.map.panTo(this.props.center)
      console.log(this.map.getBounds());
    }
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