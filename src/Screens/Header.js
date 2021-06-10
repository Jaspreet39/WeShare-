import React,{useEffect,useState} from 'react'
import './Header.css'
import HeaderOption from './HeaderOption'
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory, useLocation} from 'react-router';
import { useSelector} from 'react-redux';
import { selectUser } from '../features/userSlice';


function Header() {
    const [show, handleShow] = useState(false);
    const [burgerStatus, setBurgerStatus] = useState(false)
    const history = useHistory()
    const user = useSelector(selectUser)

    const location = useLocation()
    const pathName = location.pathname
    console.log(pathName)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });

        return () => window.removeEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });

    }, [])

    return (
        <div className={`header ${show && "header--scroll"}`}>
           <img onClick={()=>history.push("/")} src="https://firebasestorage.googleapis.com/v0/b/weshare-clone.appspot.com/o/assets%2Flogo.png?alt=media&token=e2497325-697f-4c6a-9838-fb19c67c46bd" alt=""/>
           <div className="header_right">
               <div className="header_rightIcons">
                <HeaderOption  onClick={()=>history.push("/")} Icon={SearchIcon} title="Find a rider" selected={pathName==="/"&& true} color="black"/>
                <HeaderOption onClick={()=>history.push('/driverOffer')}  Icon={AddIcon} title="Offer a ride" selected={pathName==="/driverOffer"&& true} color="black"/>
                <HeaderOption  avatar={true} title={user.displayName} selected={pathName==="/profile"&& true} color="black"/>
               </div> 
               <div className="header_menu">
                    <MenuIcon onClick={()=>setBurgerStatus(true)}/>
               </div>  
           </div>
           <div className="header_menuItems" style={{transform:burgerStatus ?"translateX(0)" : "translateX(100%)"}}>
               <div className="header_closeIcon">
                    <p>Menu Items</p>
                    <CloseIcon onClick={()=>setBurgerStatus(false)}/>
               </div>
               <HeaderOption onClick={()=>history.push("/")} Icon={SearchIcon} title="Find a rider"/>
                <HeaderOption onClick={()=>history.push('/driverOffer')}  Icon={AddIcon} title="Offer a ride"/>
                <HeaderOption  avatar={true} title={user.displayName}/>
           </div>
        </div>
    )
}


export default Header
