import React, { Component } from 'react';
import './Map.css';
import L from 'leaflet';
require('leaflet-hash');

class LeafMap extends Component {
    constructor(props) {
        super(props);
        this.state = { map: null };
    }

    componentDidMount() {
        var map = L.map('mapid', this.props.mapOpts).setView([20.0, 0.0], 3);
        new L.Hash(map);
        var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
        var osm = new L.TileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib });
        map.addLayer(osm);
        this.setState({ map: map })
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="Map" id="mapid"></div>
        );
    }
}

export default LeafMap;
