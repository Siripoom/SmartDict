import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Page404 from './pages/Page404'
import Nav from  "./components/Nav"
import Home from "./pages/Home"
import Translate from './pages/Translate'
import Grammar from './pages/Grammar'
import SignIn from './pages/SignIn'
import Register from './pages/Register'

function App() {

  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="translate" element={<Translate/>} />
          <Route path="grammar" element={<Grammar/>} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<Page404/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
