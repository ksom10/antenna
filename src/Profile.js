import React from 'react';
import './Profile.css';
import Sidebar from './Sidebar';
import Profilefeed from './Profilefeed';
import Widgets from './Widgets';
import db from './firebase';
import WidgetsTwo from './WidgetsTwo';
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from './firebase';
import ProfileWidget from './ProfileWidget';


function Profile() {
  return (
    <div className="profile">
        <div className="nav">
      <Sidebar/>
      </div>
      <div className="profileCont">
      <ProfileWidget/>
      <Profilefeed/>
      <Widgets className="widge"/>
      </div>
      
    </div>
  );
}

export default Profile;