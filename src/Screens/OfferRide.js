import React from 'react'
import { useHistory } from 'react-router'
import './OfferRide.css'


function OfferRide() {
    const history = useHistory()
    
     
    return (
        <div className="offerRide">
            <img src="https://img.pngio.com/looking-for-a-house-by-map-looking-person-icon-png-and-vector-png-looking-at-map-512_512.png" alt=""/>
            <div className="offerRide_container">
                <h1>Driving in your car soon?</h1>
                <p>Lets's make this last expensive journey ever</p>
                <button onClick={() => history.push('/driverOffer')}>offer a ride</button>
            </div>
        </div>
    )
}

export default OfferRide
