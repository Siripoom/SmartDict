import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Page404 from './pages/Page404'
import Nav from  "./components/Nav"
import Home from "./pages/home"
import Translate from './pages/Translate'
import Grammar from './pages/Grammar'
import Footer from './components/Footer'
import About from './pages/About'
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
           <Route path='About' element={<About />} />
          <Route path="*" element={<Page404/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
