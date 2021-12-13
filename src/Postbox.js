import { Avatar, Button } from '@material-ui/core';
import React, {useState} from 'react';
import './Postbox.css';
import db from './firebase';

function Postbox() {
    const [postMessage, setPostMessage] = useState('');
    const [postImage, setPostImage] = useState('');
    
    const sendPost = e =>{
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Party Chad',
            userName: 'chaddydaddy',
            verified: false,
            text: postMessage,
            image: postImage,
            avatar: "https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg"
        });

        setPostMessage("");
        setPostImage("");
    }
    return (
        <div className='postBox'>
            <form>
                <div className="postBox__input">
                    <Avatar src="https://iconape.com/wp-content/png_logo_vector/avatar-7.png"/>
                    <input
                    onChange={(e) => setPostMessage(e.target.value)} 
                    value={postMessage} placeholder="What's Happening?" type="text"></input>
                </div>
                <input
                onChange={(e) => setPostImage(e.target.value)}
                value={postImage} className="postBox_imageInput" placeholder="Enter Image URL" type="text"/>
                <Button onClick={sendPost} type="submit" className="postBox__postButton">Post</Button>
            </form>
        </div>
    )
}

export default Postbox
