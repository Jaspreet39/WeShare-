import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {selectUser, setRideInfo} from '../features/userSlice'
import firebase from 'firebase'
import './DriverRouteInfo.css'
import db from  '../firebase'
// import { MenuItem, FormControl, Select}

function DriverRouteInfo() {

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [buttonActive, setButtonActive] = useState(false)

    const user = useSelector(selectUser)
    const dispatch = useDispatch()


    const offerRide = (e) => {
       e.preventDefault();
       const ref = db.collection("Ride Offer").doc('data')
       const time = firebase.firestore.FieldValue.serverTimestamp();

       ref.collection('source').add({
           timeStamp: time,
           email:user.email,
           LeavingFrom: value1,
           name:user.displayName,
       })
       ref.collection('destination').add({
           timeStamp:time,
           email:user.email,
           GoingTo:value2,
           name:user.displayName,
       })
       .then(console.log(value1, value2))
       .then(setValue1(''),
       setValue2(''))
    }


    useEffect(()=>{
      (value1 && value2) ? setButtonActive(true): setButtonActive(false)
    },[value1, value2])

    return (
        <div className="driverRouteInfo">
            <h1>Where would you like to pick up passengers?</h1>
            <div className="Text">
            <input disabled  type="text" placeholder="Why an exact location?"/>
            </div>
            <div className="searchRoute">
            <input value={value1} onChange={e=>setValue1(e.target.value)}  type="text" placeholder="Enter Your Source..."/>
            <input value={value2} onChange={e=>setValue2(e.target.value)} type="text" placeholder="Enter Your Destination..."/>
            <button style={{display:buttonActive ? "flex" : "none"}} type='submit' onClick={offerRide}>Let's Start Riding</button>
            </div>
        </div>
    )
}

export default DriverRouteInfo
