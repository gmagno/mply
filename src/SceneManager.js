import React, { Component } from 'react';
import './SceneManager.css'
import StreetViewer from './Street';
import LeafMap from './Map';
import Card from './Card'

import SwitchButton from './SwitchButton'
import MenuButton from './MenuButton'
import L from 'leaflet'

// const MPL_API = 'https://a.mapillary.com/v3'

class SceneManager extends Component {
    constructor(props) {
        super(props);
        let isFirstTimeRunning = true;
        var mapsPlaceholder = [];

        let mapOpts = {
            center: [51.505, -0.09],
            zoom: 13,
            layers: new L.TileLayer(
                'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                {
                    maxZoom: 18,
                    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
                }
            )
        }

        this.state = {
            isMapFullscreen: true,
            isFirstTimeRunning: isFirstTimeRunning,
            mapOpts: mapOpts,
            mapsPlaceholder: mapsPlaceholder,
        };
    }

    checkIsMapFullscreenSwitch = event => {
        this.setState(prevState => ({
            isMapFullscreen: !prevState.isMapFullscreen
        }));
    }

    mapMouseUpHandler = event => {
        let map = this.leafMap.state.map;
        let mapOpts = {
            center: map.getCenter(),
            zoom: map.getZoom(),
        }
        this.setState((prevState, props) => ({
            mapOpts: mapOpts,
        }));
    }

    componentWillUnmount() {
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('the prev state')
        // console.log(prevState);
    }

    render() {
        let card = <div />, mainView = <div />;

        // if (this.state.isFirstTimeRunning) {
        //     mainView = <LeafMap
        // ref={(leafMap) => { this.leafMap = leafMap; }}
        // mapOpts={this.state.mapOpts}
        // mouseUpEvent={this.mapMouseUpHandler}
        //     />

        // card = <Card content={StreetViewer} />;
        // this.setState((prevState, props) => ({
        //     isFirstTimeRunning: false,
        // }));
        // } else { }



        if (this.state.isMapFullscreen) {
            mainView = <LeafMap />
            card = <Card content={StreetViewer} />;
        } else {
            mainView = <StreetViewer />
            card = <Card content={LeafMap} />;
        }

        return (
            <div className="SceneMgr-div">
                {mainView}
                {card}
                <SwitchButton onClick={this.checkIsMapFullscreenSwitch} />
                <MenuButton />
            </div >
        );
    }
}

export default SceneManager;
