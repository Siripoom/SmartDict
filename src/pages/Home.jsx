import SearchBar from "../components/SearchBar";
import Hero from "../components/Hero"
import Footer from "../components/Footer"
export default function Home(){
    return(
        <div className="container">
            <Hero/>
            <SearchBar/>
            <Footer/>
        </div>
    )
}