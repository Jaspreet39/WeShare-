import { Avatar, Icon } from '@material-ui/core'
import React from 'react'
import './DriverDetail.css'

function DriverDetail({avatar, name, rating, Icon}) {
    return (
        <div className="driverDetail">
            {avatar && (<Avatar classNam="driver_avatar" src="" alt=""/>)}
            <div className="driver_info">
                <h4>{name}</h4>
                <div className="driver_rating">
                 {Icon &&(<Icon className="ratingIcon"/>)}
                <h5>{rating }</h5>
                </div>
            </div>
        </div>
    )
}

export default DriverDetail
