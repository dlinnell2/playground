import React, { Component } from 'react';
import Map from './Map';
import Marker from './Marker';
import API from '../utils/api.js'

class MapContainer extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        center: {
            lat: 29.756846,
            lng: -95.363444
        },
    }

    componentDidMount() {
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
            })
        }
    }

    componentDidUpdate(prevProps, prevState){
        
    }

    render() {
        return (
            <div style={{ height: '100vh' }}>
                <Map 
                center={this.state.center}
                
                >
                    <Marker />
                </Map>
            </div>
        )
    }
}

export default MapContainer