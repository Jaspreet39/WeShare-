import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { auth } from '../firebase'
import './SignUpScreen.css'

function SignUpScreen() {
    const [email, setEmail] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const dispatch = useDispatch()
   
   

    const register = () => {
    if(!name){
            return alert("Please Enter full Name")
        }
         auth.createUserWithEmailAndPassword(email, password)
         .then((userAuth) => {
             userAuth.user.updateProfile({
                 displayName: name,
                 photoURL: profilePic,
         }).then(() => {
              dispatch(login({
                  email:userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                  photoURL:profilePic,
              })
            )
         })    
    }).catch(error => alert(error))
}

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoUrl:userAuth.user.photoURL,
            }))
        }).catch(error => alert(error))
    }

    
   

    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input value={name} onChange={e => {setName(e.target.value)}} type="text" placeholder="Full Name"/>
                <input value={profilePic} onChange={e => {setProfilePic(e.target.value)}} type="text" placeholder="Profile Pic(optional)"/>
                <input value={email} onChange={e => {setEmail(e.target.value)}} type="email" placeholder="Email"/>
                <input value={password} onChange={e => {setPassword(e.target.value)}} type="password" placeholder="Password"/>
                <button onClick={signIn} type="submit">Sign In</button>
                <h4>
                <span className="signUpScreen_gray">New to WeShare?</span>
                <span onClick={register} className="signUpScreen_link"> Sign Up Now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen
