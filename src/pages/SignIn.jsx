import { auth } from "../firebase_config";
import { signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import facebook from "../assets/facebook.png";
// import google from "../assets/google.png";
import "../css/form.css";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

export default function SignIn(props) {
  const [userInfo, setUserInfo] = useState(null);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false); // State for loading indicator
  const navigate = useNavigate();
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
  const googleLogin = async () => {
    try {
      
      const provider = new GoogleAuthProvider();
      auth.useDeviceLanguage();
      const result = await signInWithPopup(auth, provider);
      console.log(result)
      navigate("/");
    } catch (err) {
      //   alert(err.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (email == "") {
      alert("Enter you Email");
    } else if (pass == "") {
      alert("Enter you Password");
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, pass);
        const user = userCredential.user;
        setEmail('')
        setPass('')
        navigate("/");
        console.log(user)
      } catch (err) {
        alert(err.code);
        alert(err.message);
      }
    }
  };

  const clearPathAndNavigate = () => {
    navigate("/Register");
  };

  return (
    <div>
      <div className="body my-5">
        <div className="Box">
          <h1 className="text-center text-4xl font-bold">Sign-in</h1>
          <br />
          <div className="icon justify-center">
            {/* <div className="logo">
              <button type="button" className="btn btn-neutral">
                <i className="bx bxl-facebook-circle"></i>Facebook
              </button>
            </div> */}
            <div className="logo">
              <button
                type="button"
                className="btn btn-neutral"
                onClick={googleLogin}
              >
                <i className="bx bxl-google"></i> Google
              </button>
            </div>
          </div>
          <br />
          <form onSubmit={handleSignIn}>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Enter email"
                className="input input-bordered  w-full max-w-xs"
                size={40}
                maxLength={50}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Enter password"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </div>
            <div className="icon">
              <button
                type="button"
                className="btn "
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <button type="submit" className="btn ">
                Sign-in
              </button>
            </div>
          </form>
          <div className="text-center">
            <button onClick={clearPathAndNavigate}>No account?</button>
          </div>
        </div>
      </div>
    </div>
  );
}
