import filmsData from "../data/filmsData";
import "../styles/hero.css";

export default function Hero() {

  const filmTop = {
    id: 1,
    titre: "Interstellar",
    description: "Voyage spatial pour sauver l'humanité",
    annee: 2014,
    genre: "Science-Fiction",
    realisateur: "Christopher Nolan",
    image: "https://image.tmdb.org/t/p/w500/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg",
    note: 5,
  };

  return (
    <section className="hero-section">

      <div className="hero-left">
        <img src={filmTop.image} alt={filmTop.titre} />

        <div className="hero-overlay">
            <div>

          <h2>{filmTop.titre}</h2>
          <p>{filmTop.genre}</p>

          <div className="stars">
            {"⭐".repeat(filmTop.note)}
          </div>
            </div>

            <button className="btn-details">Détails</button>
          <div className="hero-actions">
            <span className="year">{filmTop.annee}</span>
            <span className="badge">LE MIEUX NOTÉ</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        {filmsData.map((film) => (
          <div className="film-item" key={film.id}>
            
            <img src={film.image} alt={film.titre} />

            <div className="film-info">
              <h3>{film.titre}</h3>

              <div className="stars">
                {"⭐".repeat(film.note)}
              </div>

              <button>Détails</button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}