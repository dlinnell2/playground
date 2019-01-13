import React, { Component } from 'react';

class Marker extends Component {

    componentDidMount() {
        

        let google = this.props.google;
        let map = this.props.map;

        let marker = new google.maps.Marker({
            map: map,
            position: {
                lat: 29.756846,
                lng: -95.363444
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