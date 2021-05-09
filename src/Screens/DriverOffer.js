import React from 'react'
import './DriverOffer.css'
import DriverRouteInfo from './DriverRouteInfo'
import Header from './Header'
import MapInfo from './MapInfo'
// import 'leaflet/dist/leaflet.css'

function DriverOffer() {
    return (
        <div className="driverOffer">
            <Header/>
            <div className="driverOffer_body">
                <DriverRouteInfo/>
                <MapInfo/>
            </div>
        </div>
    )
}

export default DriverOffer
