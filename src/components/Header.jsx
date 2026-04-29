import "../styles/header.css"
import Filter from "./FilterFiml"
import NavBar from "./NavBar"
export default function Header({onOpenModal}){
    return(
        <div className="header-div">
               <header className="header">
                <NavBar onOpenModal={onOpenModal}/>
                <Filter/>
               </header>
        </div>
    )
}