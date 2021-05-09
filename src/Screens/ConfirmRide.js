import React, { useEffect, useState } from 'react'
import './ConfirmRide.css'
import Header from './Header'
import SearchIcon from '@material-ui/icons/Search';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Suggest from './Suggest';
import { useSelector } from 'react-redux';
import { selectBannerData } from '../features/userSlice';
import { useHistory } from 'react-router';
import DriverSuggestion from './DriverSuggestion';



function ConfirmRide() {
    const bannerData = useSelector(selectBannerData)
    const history = useHistory();

    useEffect(()=>!bannerData && history.replace('/'))

    const [src,setSrc] =useState(bannerData?.src)
    const [des,setDes] =useState(bannerData?.des)

    return (    
        <div className="confirmRide">
            <Header/>
           
                <div className="confirmRide_inputContainer">
                    <SearchIcon/>
                    <input  value={src} type="text" placeholder="source" disabled/>
                     <ArrowRightAltIcon className="confirmRide_icon"/>
                    <input  value={des} type="text" placeholder="destination" disabled/>
                </div>              
            
            <Suggest/>
            <DriverSuggestion/>
        </div>
    )
}

export default ConfirmRide
