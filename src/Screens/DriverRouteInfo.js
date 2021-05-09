import React from 'react'
import './DriverRouteInfo.css'

function DriverRouteInfo() {
    return (
        <div className="driverRouteInfo">
            <h1>Where would you like to pick up passengers?</h1>
            <div className="Text">
            <input disabled  type="text" placeholder="Why an exact location?"/>
            </div>
            <div className="searchRoute">
            <input  type="text" placeholder="Enter Full address"/>
            </div>
        </div>
    )
}

export default DriverRouteInfo
