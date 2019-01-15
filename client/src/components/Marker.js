import React, { Component } from 'react';

class Marker extends Component {

    componentDidMount() {
        

        let google = this.props.google;
        let map = this.props.map;

        let marker = new google.maps.Marker({
            map: map,
            position: {
                lat: this.props.lat,
                lng: this.props.lng
            }
        })
    }

    componentDidUpdate() {

    }

    render() {
        return null
    }
}

export default Marker;