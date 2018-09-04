import React, { Component } from 'react';
import './Street.css';
// import { Viewer } from 'mapillary-js'
// var mapillaryJs = require('mapillary-js');
// import * as mapillaryJs from '/home/gm/Dev/mapillary_clone/node_modules/mapillary-js/dist/mapillary.js'
// import * as mapillaryJs from '/home/gm/Dev/mapillary_clone/node_modules/mapillary-js/dist/mapillary.min.js'
// import * as mapillaryJs from 'mapillary-js'
import * as mapillaryJs from 'mapillary-js';


class StreetViewer extends Component {

    componentDidMount() {
        var mly = new mapillaryJs.Viewer(
            'mly3',
            'testing_purposes',
            '67z1cd_nkx562Hf8NYhWeg',
            {
                component: {
                    cover: false,
                },
            }
        );
        // Viewer size is dynamic so resize should be called every time the window size changes
        window.addEventListener("resize", function () { mly.resize(); });
    }

    render() {
        return (
            <div className="Street-viewer" id="mly3"></div>
        );
    }
}

export default StreetViewer;
