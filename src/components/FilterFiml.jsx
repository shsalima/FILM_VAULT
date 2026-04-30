
export default function Filter(){
    return(
        <div className="div-filter">
                <h2><i class="ri-filter-2-line"></i>FILTRER VOTRE BIBLIOTHÈQUE</h2>
                    <div  className="filter">
                       
                        <input type="text"  placeholder="Tous les Genres" />
                        <input type="text"  placeholder="Toutes les Notes" />

                    </div>
        </div>
    )
}