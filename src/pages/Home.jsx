import SearchBar from "../components/SearchBar";
import Hero from "../components/Hero"
export default function Home(){
    return(
        <div className="container">
            <Hero/>
            <SearchBar/>
        </div>
    )
}