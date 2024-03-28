import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Page404 from './pages/Page404'
import Nav from  "./components/Nav"
import Home from "./pages/Home"
import Translate from './pages/Translate'
import Grammar from './pages/Grammar'
import Footer from './components/Footer'

import SignIn from './pages/SignIn'
import Register from './pages/Register'
import {useState,useEffect} from 'react'
import {auth}  from "../src/firebase_config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function App() {
  const [userInfo, setUserInfo] = useState(null);

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
        useNavigate('/')
    }catch(err){
        alert(err.message);
    }
}
  return (
    <>
      <BrowserRouter>
      <Nav user={userInfo} />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="translate" element={<Translate/>} />
          <Route path="grammar" element={<Grammar/>} />
          <Route path="SignIn" element={<SignIn/>} />
          <Route path="Register" element={<Register/>} />
          <Route path="*" element={<Page404/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
