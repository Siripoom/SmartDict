import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Page404 from './pages/Page404'
import Nav from  "./components/Nav"
import Home from "./pages/Home"
import Translate from './pages/Translate'
import Grammar from './pages/Grammar'
<<<<<<< HEAD
import Footer from './components/Footer'
=======
import About from './pages/About'
import Profile from './pages/Profile'
import Edit from './components/Edit'

>>>>>>> 3d43567f9b115e98891b1bbe1e3ef378573ceca2
function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="translate" element={<Translate/>} />
          <Route path="grammar" element={<Grammar/>} />
          <Route path='about' element={<About />} />
          <Route path='profile' element={<Profile />} />
          <Route path='edit' element={<Edit />} />
          <Route path="*" element={<Page404/>} />
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App;
