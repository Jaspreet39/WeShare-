import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Header from './Header'
import './ProfileScreen.css'

function ProfileScreen() {
    const user = useSelector(selectUser)
    return (
        <div className="profileScreen">
        <Header/>
        <div className="profileScreen_body">
        <h1>Edit Profile</h1>
            
            <div className="profileScreen_info">
                <Avatar className="profileScreen_avatar">{user?.email[0]}</Avatar>
                <div className="profileScreen_detail">
                <div className="profileScreen_userInfo">
                    <h2>{user.displayName}</h2>
                    <h4>{user.email}</h4>
                </div>    
                    <div className="profileScreen_plans">
                        <button onClick={() => auth.signOut()}
                         className="profileScreen_signOut">SignOut</button>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default ProfileScreen
