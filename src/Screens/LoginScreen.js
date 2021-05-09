import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'

function LoginScreen() {
    const [signIn, setSignIn] = useState(false)
    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img className="loginScreen_logo" src="https://firebasestorage.googleapis.com/v0/b/weshare-clone.appspot.com/o/assets%2Flogo.png?alt=media&token=e2497325-697f-4c6a-9838-fb19c67c46bd" alt=""/>
                <button onClick = {() => setSignIn(true)}
                 className="loginScreen_button">Sign In</button>
                <div className="loginScreen_gradient"/>
            </div>

            <div className="loginScreen_body">
            {signIn ? (
                <SignUpScreen/>
            ):(
               <>
                    <h1>
                        If you have already register then Sign In.
                    </h1>
                    <div className="loginScreen_input">
                        <form>
                            <input type="email" placeholder="Email Address"/>
                            <button onClick = {() => setSignIn(true)} className="loginScreen_getStarted">GET STARTED</button>
                        </form>
                    </div>
                </>
            )}
                
            </div>
            
        </div>
    )
}

export default LoginScreen
