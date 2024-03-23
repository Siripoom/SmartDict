import auth from "../firebase_config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
// import facebook from "../assets/facebook.png";
// import google from "../assets/google.png";
import "../css/form.css";
import ProSign from "./ProSign";
import Nav from "../components/Nav";
import { Navigate } from "react-router-dom";

export default function SignIn() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserInfo(user);
                console.log("Auth" , user)
                return <Navigate to="/" />
            } else {
                setUserInfo(null);
                window.sessionStorage.clear();
            }
        })
    }, [])

    const login = () => {
        const provider = new GoogleAuthProvider();
        auth.useDeviceLanguage();
        signInWithPopup(auth, provider)
            .then((result) => {
                
            })
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
        <div>
            <Nav user={userInfo} login={login} logout={logout} />
        <div className="body">
            
            <div className="Box">
                <h1 className="text-center">Sign-in</h1>
                <br />
                <div className="icon">
                    <div className="logo" >
                    {/* <img src={facebook} alt="faceboox" /> */}
                    <button type="button" className="btn btn-primary"><i className='bx bxl-facebook-circle'></i>Facebook</button>
                </div>
                <div className="logo">
                   {/* <img src={google} alt="google" /> */}
                   <button type="button" className="btn btn-primary " onClick={login}><i className='bx bxl-google' ></i> Google</button>
                </div>
                </div>
                <br />
                <div className="mb-3">
                    <input type="text" name="txtUsername" size="50" maxLength="50" placeholder="Enter Your Username"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="password" name="txtPassword" size="50" maxLength="50" placeholder="Enter Your Password"
                        className="form-control" />
                </div>
                <div className="icon">
                    <button type="button" className="btn btn-dark" >Cancel</button>
                    <button type="button" className="btn btn-dark" >Sign-in</button>
                </div>
                <div className="text-center">
                    No account?
                </div>
            </div>
        </div>
        </div>
    )

}

