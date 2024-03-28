import {auth} from "../firebase_config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import facebook from "../assets/facebook.png";
// import google from "../assets/google.png";
import "../css/form.css";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

export default function SignIn(props) {
    const [userInfo, setUserInfo] = useState(null);
    const  navigate = useNavigate();
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          //* Sign In
          setUserInfo(user);
        } else {
          //* Sign Out
          setUserInfo(null);
        }
      });
    }),
      [userInfo];
    const login = async() => {
      try{
          const provider = new GoogleAuthProvider();
          auth.useDeviceLanguage();
          const result = await signInWithPopup(auth, provider)
          navigate('/')
      }catch(err){
        //   alert(err.message);
      }
  }

    

    const clearPathAndNavigate = () => {
        navigate('/Register');
      };
    

    return (
        <div>
            {/* <Nav user={userInfo} login={login} logout={logout} /> */}
        <div className="body">
            <div className="Box">
                <h1 className="text-center">Sign-in</h1>
                <br />
                <div className="icon">
                    <div className="logo" >
                    <button type="button" className="btn btn-neutral"><i className='bx bxl-facebook-circle'></i>Facebook</button>
                </div>
                <div className="logo">
                   <button type="button" className="btn btn-neutral" onClick={login}><i className='bx bxl-google' ></i> Google</button>
                </div>
                </div>
                <br />
                <div className="mb-3">
                    <input type="text" placeholder="Enter username" className="input input-bordered  w-full max-w-xs" size={40} maxLength={50} />
                </div>
                <div className="mb-3">
                    <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="icon">
                    <button type="button" className="btn " onClick={() => navigate('/')} >Cancel</button>
                    <button type="button" className="btn " >Sign-in</button>
                </div>
                <div className="text-center">
                    <button onClick={clearPathAndNavigate}>No account?</button>
                </div>
            </div>
        </div>
    </div>
    )

}

