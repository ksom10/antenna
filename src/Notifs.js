import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatIcon from '@material-ui/icons/Chat';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import React, { forwardRef} from 'react';
import './Notifs.css';

const Notifs = forwardRef(({
    displayName,
    userName,
    verified,
    timestamp,
    text,
    image,
    avatar
}, ref) => { 
    return (
        <div className="notifs" ref={ref}>
            <div className="notifs__avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="notifs__body">
                <div className="notifs_header">
                    <div className="notifs__headerText">
                        <h3>
                            {displayName}{" "} 
                            <span className="notifs__headerSpecial">
                                {verified && <VerifiedUserIcon className="notifs__badge" />}
                                @{userName}
                            </span>
                        </h3>
                    </div>
                    <div className="notifs__headerDescription">
                        <p>Liked your post</p>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Notifs
