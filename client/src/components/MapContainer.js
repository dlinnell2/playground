import React, { Component } from 'react';
import Map from './Map';
import Marker from './Marker';

class MapContainer extends Component {

    render(){
        return(
            <div style = {{height: '100vh'}}>
                <Map>
                    <Marker />
                </Map>
            </div>
        )
    }
}

export default MapContainer