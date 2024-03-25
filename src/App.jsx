import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Page404 from './pages/Page404'
import Nav from  "./components/Nav"
import Home from "./pages/Home"
import Translate from './pages/Translate'
import Grammar from './pages/Grammar'
import Footer from './components/Footer'
import Word from './pages/Word'
function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="translate" element={<Translate/>} />
          <Route path="grammar" element={<Grammar/>} />
          <Route path="word" element={<Word/>} />
          <Route path="*" element={<Page404/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
