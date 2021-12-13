import React from "react";
import "./Sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SidebarOption from "./SidebarOption";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Button } from "@material-ui/core";
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from './firebase';
import { Link, useLocation } from 'react-router-dom';




function Sidebar(){
    
    return(
        <div className="sidebar">
             <Link style={{textDecoration: 'none', color: 'black'}} to="/"><SidebarOption Icon={HomeIcon} text="Home"/></Link>
             <Link style={{textDecoration: 'none', color: 'black'}} to="/explore"><SidebarOption Icon={SearchIcon} text="Explore"/></Link>
             <Link style={{textDecoration: 'none', color: 'black'}} to="/notifications"><SidebarOption Icon={NotificationsIcon} text="Notifications"/></Link> 
                <Link style={{textDecoration: 'none', color: 'black'}} to="/profile"><SidebarOption Icon={AccountBoxIcon} text="Profile"/></Link>
           

            
        </div>
    );
}

export default Sidebar;