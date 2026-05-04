import logo from "/public/logo.jpg"
export default function NavBar({ onOpenModal }){

    return(
          <nav className="navBar">
                <div className="logo-tritre">
                    <img src={logo}/>
                    <h1>FILM <span>VAULT</span> </h1>
                </div>
                <button onClick={onOpenModal}>
                  
                   + Ajouter un film
                </button>
             </nav>

    )
}