import React from 'react'
import './Destination.css'
import DestinationOption from './DestinationOption'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Destination() {
    return (
        <div className="destination">
            <h1>Where do you want to go? </h1>
            <div className="destination_options">
                <DestinationOption  source="Dugri" Icon={ArrowRightAltIcon} destination="GNE" />
                <DestinationOption   source="Gill" Icon={ArrowRightAltIcon} destination="GNE"/>
                <DestinationOption source="Haibowal" Icon={ArrowRightAltIcon} destination="GNE"/>
            </div>
            <span className="span">
              See our most popular rides
            </span>
        </div>
    )
}

export default Destination
