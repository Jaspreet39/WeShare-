import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import ConfirmRide from './Screens/ConfirmRide';
import DriverOffer from './Screens/DriverOffer';
import FAQ from './Screens/FAQ';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect (() => {
   const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth)
        {       
        dispatch(login({
         email:userAuth.email,
         uid:userAuth.uid,
         displayName:userAuth.displayName,
         photoUrl:userAuth.photoURL,
        }))
      }else{
        dispatch(logout())
        auth.signOut()
      }
    }) 
    return unsubscribe
  },[])

  return (
    <div className="app">
      <Router>
      {!user ? (
        <LoginScreen/>
      ):(
           <Switch>
            <Route exact path="/profile">
             <ProfileScreen/>
           </Route>
          <Route exact path="/">
            <HomeScreen/>
          </Route>       
           <Route path ="/confirmRide">
             <ConfirmRide/>
           </Route>
           <Route path="/driverOffer">
             <DriverOffer/>
           </Route>
           <Route path="/Faq">
            <FAQ/>
           </Route>
        </Switch>
      )}
       
      </Router>
    </div>
  );
}

export default App;
