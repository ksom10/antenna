import React from 'react';
import './ProfileWidget.css';
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed,
TwitterShareButton,
TwitterTweetEmbed} from "react-twitter-embed";
import { Avatar } from '@material-ui/core';
import { auth } from './firebase';
import LogoutIcon from '@mui/icons-material/Logout';
function ProfileWidget() {
    return (
        <div className="widgetsProf">
            <div className="widgetsProf__widgetContainer">
            <div className="widgetsProf__widgetHeader">
            <h2>Your Account</h2>
            <button onClick={() => auth.signOut()}><LogoutIcon></LogoutIcon></button>
            </div>
                <div className="widgetsProf__widgetInfo">
                    <Avatar style={{height: '75px', width: '75px'}} src="https://iconape.com/wp-content/png_logo_vector/avatar-7.png"/>
                    <div className="widgetsProf__widgetName">
                        <h3>Kam Som</h3>
                        <h4>@ksom10</h4>
                    </div>
                </div>
                <div className='widgetsProf_widgetCount'>
                    <div className='widgetsProf_widgetFollowers'>
                        <h3>256</h3>
                        <h4>Followers</h4>
                    </div>
                    <div className='widgetsProf_widgetFollowers'>
                        <h3>187</h3>
                        <h4>Following</h4>
                    </div>
                    <div className='widgetsProf_widgetFollowers'>
                        <h3>4</h3>
                        <h4>Posts</h4>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProfileWidget;
