import React from 'react'
import Header from './Header'
import './HomeScreen.css'
import InfoIcon from '@material-ui/icons/Info';
import Banner from './Banner';
import OfferRide from './OfferRide';
import Destination from './Destination';
import Text from './Text';
import { useHistory } from 'react-router';

function HomeScreen() {
    const history = useHistory()
    return (
        <div className="homeScreen">
            <Header/>
         <div className="homeScreen_text">
            <InfoIcon className="homeScreen_info"/>
            <h3>CoronaVirus: for more information about thr current situation, please read our</h3>
            <span onClick={()=>history.push("/Faq")}>
               FAQ
            </span>             
         </div>       
         <Banner/> 
         <OfferRide/> 
         <Destination/> 
         <Text/>      
        </div>
    )
}

export default HomeScreen
