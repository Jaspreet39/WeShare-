import React from 'react'
import './DestinationOption.css'

function DestinationOption({source, Icon, destination}) {
    return (
        <div className="destinationOption">
            <h3 className="destinationOption_source">{source}</h3>
            {Icon && <Icon className="destinationOption_icon"/>}
            <h3 className="destinationOption_destination">{destination}</h3>
        </div>
    )
}

export default DestinationOption
