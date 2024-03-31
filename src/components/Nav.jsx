import { Link } from "react-router-dom"
import auth from "../firebase_config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function Nav(props) {

  const user = props.user;
  const logout = () => {
    signOut(auth)
        .then(() => { })
        .catch(err => {
            alert(err);
        })
}
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="translate">Translate</Link>
              </li>
              <li>
                <Link to="grammar">Grammar</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">SmartDict</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="translate">Translate</Link>
            </li>
            <li>
              <Link to="grammar">Grammar</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end d-flex">
          {props.user ? (
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">{user.displayName}</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to = " ">Profile</Link></li>
              <li><Link to = " ">Wordlish</Link></li>
              <li><button className="btn" onClick={logout}>logout</button></li>
            </ul>
          </div>
          ) : (
            <div>
              <Link to="SignIn"><button className="btn">SignIn</button></Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
