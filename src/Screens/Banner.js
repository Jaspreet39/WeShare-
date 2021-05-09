import React, { useEffect, useState } from 'react'
import './Banner.css'
import SearchIcon from '@material-ui/icons/Search';
import db from '../firebase';
import  firebase from 'firebase' 
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setBannerData } from '../features/userSlice';
import { useHistory } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';

function Banner() {
    
    const [value1,setValue1] = useState("")
    const [value2,setValue2] = useState("")
    const [buttonActive,setButtonActive] = useState(false);
    const [showProgress,setShowProgress] = useState(false);

    const dispatch = useDispatch();

    const history = useHistory();

    const user = useSelector(selectUser)

    const setRoute=(e)=>{
        e.preventDefault();
        setShowProgress(true)
        setButtonActive(true);
        const ref= db.collection('route').doc("data");

        const time = firebase.firestore.FieldValue.serverTimestamp();

        ref.collection('source').add({
            timeStamp:time,
            email:user.email,
            leavingFrom:value1,
            userId:user.uid,
        });

        ref.collection('destination').add({
            timeStamp:time,
            email:user.email,
            goingTo:value2,
            uid:user.uid,
        }).then(()=>dispatch(setBannerData({src:value1,des:value2})))
        .then(()=> nextStep())

    }

    const nextStep=()=>{
        setValue1('');
        setValue2('');
        setShowProgress(false);
        history.push("/confirmRide");
    }


    useEffect(()=>{ 

        (value1 && value2) ? setButtonActive(true) : setButtonActive(false);

    },[value1,value2]);

    return (
        
          <header
           className="banner" style={{backgroundSize:"cover",
            backgroundImage:`url("https://gcn.com/-/media/GIG/GCN/Redesign/Articles/2017/October/connectedtraffic.png")`,
            backgroundPosition:"center center",
            }}>
           
             <div className="banner_contents">
                <h1>Your ride. Your choice</h1>            
              
            <form className="banner_inputContainer">
                    <input value={value1} onChange={e=>setValue1(e.target.value)} placeholder="Leaving from" type="text"/>
                    <input value={value2} onChange={e=>setValue2(e.target.value)} placeholder="Going to" type="text"/>
                    {showProgress && <CircularProgress size={18}/>}
                    <button disabled={!buttonActive} style={{outline:0,border:'none'}} type="submit" onClick={setRoute}>
                        <SearchIcon style={{color:buttonActive ? "green":"red" }} className="banner_inputButton"/>     
                    </button>
            </form>

           
             </div> 
            </header> 
           
             
    )
}

export default Banner
