import auth from "../firebase_config";
import { singInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import google from '../assets/google.jpg';
import faceboox from '../assets/faceboox.jpg';
import form from '../css/form.css'

export default function SignIn() {
    const [userInfo, setUserInfo] = userState(null);

    useEffect(() => {
        auth.onAuthStateChange((user) => {
            if (user) {
                setUserInfo(user);
            } else {
                setUserInfo(null);
            }
        })
    }, [])

    const login = () => {
        const provider = GoogleAuthProvider();
        auth.useDeviceLanguege();
        singInWithPopup(auth, provider)
            .then((result) => { })
            .catch(err => {
                alert(err);
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => { })
            .catch(err => {
                alert(err);
            })
    }

    return (
        <div className="container-fluid">
            <Nav />
            <div className="col align-self-center">
                <h1>Signin</h1>
                <div className="icon" style={form}>
                    <img src={faceboox} alt="faceboox" />
                    <button type="button" class="btn btn-dark" onClick={login}>Facebook</button>
                </div>
                <div className="icon" style={form}>
                    <img src={google} alt="google" />
                    <button type="button" class="btn btn-dark" onClick={login}>Google</button>
                </div>
                <div className="mb-3">
                    <input type="text" name="txtUsername" size="25" maxlength="25" placeholder="Enter Your Username"
                        class="form-control" />
                </div>
                <div className="mb-3">
                    <input type="password" name="txtPassword" size="25" maxlength="25" placeholder="Enter Your Password"
                        class="form-control" />
                </div>
                <div className="icon" style={form}>
                    <button type="button" class="btn btn-light" >Cancel</button>
                    <button type="button" class="btn btn-light" onClick={login}>Sign-in</button>
                </div>
                <div className="text-center">
                    <Link to = " ">No account?</Link> 
                </div>
            </div>






        </div>
    )

}

