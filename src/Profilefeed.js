import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './Profilefeed.css';
import Postbox from "./Postbox";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Profilefeed(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').where("userName" , "==", "ksom10").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);
    return(
        <div className="proffeed">
            <div className="proffeed__header">
                <h2>Profile</h2>
            </div>

            <Postbox/>
            <FlipMove>
            {posts.map(post => (

            <Post 
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

export default Profilefeed;