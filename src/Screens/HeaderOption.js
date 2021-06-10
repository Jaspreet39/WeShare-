import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { selectUser } from '../features/userSlice'
import './HeaderOption.css'

function HeaderOption({avatar,Icon, title, onClick, color, selected}) {
    
    const history = useHistory()
    const user = useSelector(selectUser)
    return (
        <div  className={`headerOption ${selected && `headerOption--selected`}`}
        style={{
            borderBottom: `${selected && `3px solid ${color}`}` ,
            color: `${selected && color}`,
        }}>
            {Icon  && <Icon onClick={onClick} className="headerOption_icon"/>}
            {avatar &&(
                <Avatar onClick={()=>history.push('/profile')} className="headerOption_avatar" src={user?.photoUrl}>{user?.displayName[0]}</Avatar>
            )}
            <h3 className="headerOption_title">{title}</h3>

        </div>
    )
}

export default HeaderOption
