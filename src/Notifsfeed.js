import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './Notifsfeed.css';
import Postbox from "./Postbox";
import Notifs from "./Notifs";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Notifsfeed(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').where("verified" , "==", false).onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);
    return(
        <div className="notiffeed">
            <div className="notiffeed__header">
                <h2>Notifications</h2>
            </div>

            <FlipMove>
            {posts.map(post => (

            <Notifs 
            key={post.text}
            displayName= {post.displayName}
            userName = {post.userName}
            verified = {post.verified}
            text = {post.text}
            avatar = {post.avatar}
            image = {post.image}
            />
                    ))

                    }

            </FlipMove>
           
            

        </div>
    )
}

export default Notifsfeed;