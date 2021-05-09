import React from 'react'
import DriverDetail from './DriverDetail'
import './DriverSuggestion.css'
import StarIcon from '@material-ui/icons/Star';
import RouteDetail from './RouteDetail';
import { useSelector } from 'react-redux';
import { selectBannerData } from '../features/userSlice';

function DriverSuggestion() {
    const bannerData = useSelector(selectBannerData)
    return (
        
        <div className="driverSuggestion">
            <div className="driver_routeDetail">
                <RouteDetail 
                    srcTime ="08:00"
                    src={bannerData?.src}
                />
                <RouteDetail 
                    desTime="10:50"
                    des={bannerData?.des}
                />
            </div>
            <div className="driverSuggestion_detail">
                <DriverDetail
                   avatar
                    name="Harpreet Singh"
                    Icon={StarIcon}
                    rating="4.7"
                />
            </div> 
            </div>          
       
    )
}

export default DriverSuggestion
