import React from 'react';
import './Home.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import db from './firebase';
import WidgetsTwo from './WidgetsTwo';
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from './firebase';


function Home() {
  return (
    <div className="home">
      <div className="nav">
      <Sidebar/>
      </div>
      <div className="homeCont">
      <WidgetsTwo/>
      <Feed className="fee"/>
      <Widgets className="widge"/>
      </div>
      
    </div>
  );
}

export default Home;