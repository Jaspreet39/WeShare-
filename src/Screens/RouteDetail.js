import React from 'react'
import './RouteDetail.css'

function RouteDetail({src, des, srcTime, desTime}) {
    return (
        <div className="routeDetail">
         <div className="routeDetail_source">
            <h3>{srcTime}</h3>
            <h4>{src}</h4>
         </div>
         <div className="routeDetail_destination">
             <h3>{desTime}</h3>
             <h4>{des}</h4>
         </div>
        </div>
    )
}

export default RouteDetail
