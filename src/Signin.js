import React, { useRef } from 'react'
import db, { auth } from './firebase';
import './Signin.css'
const Signin = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const emailTwoRef = useRef(null);
    const passwordTwoRef = useRef(null);
    const userNameRef = useRef(null);
    const displayNameRef = useRef(null);
    const avatarRef = useRef(null);
   

    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailTwoRef.current.value,
            passwordTwoRef.current.value,
        ).then(user => {
            var userUid = auth.currentUser.uid;
            db.collection('users').doc(userUid).set({
                displayName: displayNameRef.current.value,
                email: emailTwoRef.current.value,
                userName: userNameRef.current.value,
                verified: false,
                avatar: avatarRef.current.value
            });
            console.log(userUid)
        }).catch(err => {
            console.log(err)
        })
    }
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            var userUid = auth.currentUser.uid;
            console.log(userUid);
            console.log(user);
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="signin">
            <div className="signinCont">
            <form action="">
                <h1>Sign in</h1>
                <input ref={emailRef} type="email" placeholder="Enter E-mail Address..." />
                <input ref={passwordRef} type="password" placeholder="Enter Password..." />
                <br/>
                <button onClick={signIn}>Sign in </button>
            </form>
            <form action="">
                <h1>Sign Up</h1>

                <input ref={userNameRef} type="text" placeholder="Enter Username..." />
                <input ref={displayNameRef} type="text" placeholder="Enter Display Name..." />
                <input ref={avatarRef} type="text" placeholder="Enter Profile Pic URL..." />
                 <input ref={emailTwoRef} type="email" placeholder="Enter E-mail Address..." />
                <input ref={passwordTwoRef} type="password" placeholder="Enter Password..." />
                <br/>
                <button onClick={signUp}>Sign Up </button>
            </form>
            </div>
        </div>
    )
}

export default Signin