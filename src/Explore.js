import React from 'react';
import './Explore.css';
import Sidebar from './Sidebar';
import Explorefeed from './Explorefeed';
import Widgets from './Widgets';
import db from './firebase';
import WidgetsTwo from './WidgetsTwo';
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from './firebase';



function Explore() {
  return (
    <div className="explore">
        <div className="nav">
      <Sidebar/>
      </div>
      <div className="exploreCont">
      <WidgetsTwo/>
      <Explorefeed/>
      <Widgets className="widge"/>
      </div>
      
    </div>
  );
}

export default Explore;