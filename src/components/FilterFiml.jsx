
export default function Filter(){
    return(
        <div className="div-filter">
                <h2>FILTRER VOTRE BIBLIOTHÈQUE</h2>
                    <div  className="filter">
                        <input type="text"  placeholder="Rechercher un film..." />
                        <input type="text"  placeholder="Tous les Genres" />
                        <input type="text"  placeholder="Toutes les Notes" />

                    </div>
        </div>
    )
}