import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatIcon from '@material-ui/icons/Chat';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import React, { forwardRef} from 'react';
import './Post.css';

const Post = forwardRef(({
    displayName,
    userName,
    verified,
    timestamp,
    text,
    image,
    avatar
}, ref) => { 
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post_header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "} 
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge" />}
                                @{userName}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt=""/>
                    <div className="post__footer">
                        <ChatIcon fontSize="small"></ChatIcon>
                        <RepeatIcon fontSize="small"></RepeatIcon>
                        <FavoriteBorderIcon fontSize="small"></FavoriteBorderIcon>
                        <PublishIcon fontSize="small"></PublishIcon>
                    </div>
            </div>
        </div>
    )
});

export default Post
