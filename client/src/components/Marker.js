import React, { Component } from 'react';

export default class Marker extends Component{

    componentDidMount() {
        console.log(this.props)
    }

    componentDidUpdate(){
        console.log(this.props)
    }

    render() {
        return null
    }

    /* const mark = new window.google.maps.Marker({
        position : props.coor,
        map : props.map
    }) */
}