import filmsData from "../data/filmsData";
import "../styles/hero.css";

export default function Hero({ topMovie, allMovies ,onSelect}) {
   const topThree = [...allMovies]
  if (!topMovie) return null;

 

  return (
    <section className="hero-section">

      <div className="hero-left">
           {/* {topThree.map((film, index) => (
          <div 
            className="top-card" 
            key={film.id} 
            onClick={() => onSelect(film)}
          > */}
        
        <img src={topMovie.image} alt={topMovie.titre} />

        <div className="hero-overlay">
            <div className="info">

          <h2>{topMovie.titre}</h2>
          <p>{topMovie.genre}</p>

          <div className="stars">
           {"⭐".repeat(topMovie.note)}
          </div>
            </div>

           <div className="hero-bottom">
             {/* <button className="btn-details">Détails</button> */}
            
                <span className="year">{topMovie.annee}</span>
                <span className="badge">LE MIEUX NOTÉ</span>
          
          </div>
        </div>
        {/* </div>
         ))} */}
      </div>

     <div className="hero-right">
        {allMovies.slice(0, 3).map((film) => (
          <div className="film-item" key={film.id}>
            <div className="img-container">
                <img src={film.image} alt={film.titre} />
                <i className="ri-play-circle-fill play-icon"></i> 
            </div>
            <div className="film-info">
              <h3>{film.titre}</h3>
              <div className="stars">{"⭐".repeat(film.note)}</div>
              <button className="details-link">Details</button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}