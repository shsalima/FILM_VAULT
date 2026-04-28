import "../styles/header.css"
import Filter from "./FilterFiml"
import NavBar from "./NavBar"
export default function Header(){
    return(
        <div className="header-div">
               <header className="header">
                <NavBar/>
                <Filter/>
               </header>
        </div>
    )
}