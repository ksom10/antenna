import React from 'react';
import './Notifications.css';
import Sidebar from './Sidebar';
import Notifsfeed from './Notifsfeed';
import Widgets from './Widgets';
import db from './firebase';
import WidgetsTwo from './WidgetsTwo';
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from './firebase';



function Notifications() {
  return (
    <div className="notifications">
        <div className="nav">
      <Sidebar/>
      </div>
      <div className="notificationsCont">
      <WidgetsTwo/>
      <Notifsfeed/>
      <Widgets className="widge"/>
      </div>
      
    </div>
  );
}

export default Notifications;