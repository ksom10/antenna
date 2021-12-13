import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './Explorefeed.css';
import Postbox from "./Postbox";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Explorefeed(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').where("verified" , "==", false).onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);
    return(
        <div className="exfeed">
            <div className="exfeed__header">
                <h2>Explore</h2>
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

export default Explorefeed;