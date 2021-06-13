import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Login/firebase.config';
import Navbar from '../../Navbar/Navbar';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [newUser, setNewUser] = useState({})
    console.log(newUser);
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleLogin = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                const user = {
                    userName: result.user.displayName,
                    userEmail: result.user.email,
                    userAvatar: result.user.photoURL
                }
                setNewUser(user)
                sessionStorage.setItem('email', result.user.email);
                sessionStorage.setItem('name', result.user.displayName);
                sessionStorage.setItem('avatar', result.user.photoURL);

            }).catch((error) => {
                console.log(error);
        });
    }
    return (
        <div>
            <Navbar></Navbar>
            <button onClick={handleLogin} className="btn btn-danger">Login</button>
        </div>
    );
};

export default Login;