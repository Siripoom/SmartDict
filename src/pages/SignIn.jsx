import auth from "../firebase_config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import facebook from "../assets/facebook.jpg";
import google from "../assets/google.jpg";
import "../css/form.css";

export default function SignIn() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserInfo(user);
            } else {
                setUserInfo(null);
            }
        })
    }, [])

    const login = () => {
        const provider = GoogleAuthProvider();
        auth.useDeviceLanguage();
        signInWithPopup(auth, provider)
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
        <div>
            <div className="Box">
                <h1>Sign-in</h1>
                <div className="icon" >
                    <button type="button" className="btn btn-dark" onClick={login}><img src={facebook} alt="faceboox" />Facebook</button>
                    <button type="button" className="btn btn-dark" onClick={login}> <img src={google} alt="google" />Google</button>
                </div>
                {/* <div className="icon">
                   
                   
                </div> */}
                <div className="mb-3">
                    <input type="text" name="txtUsername" size="50" maxLength="50" placeholder="Enter Your Username"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="password" name="txtPassword" size="50" maxLength="50" placeholder="Enter Your Password"
                        className="form-control" />
                </div>
                <div className="icon">
                    <button type="button" className="btn btn-light" >Cancel</button>
                    <button type="button" className="btn btn-light" onClick={login}>Sign-in</button>
                </div>
                <div className="text-center">
                    No account?
                </div>
            </div>
        </div>
    )

}

