// components/MovieCatalog.jsx
import "../styles/catalog.css";

export default function FilmsCatalog({ movies, onSelect }) {
  return (
    <section className="catalog-section">
      <div className="catalog-header">
        <div className="catalog-title">
          <i className="ri-film-line"></i>
          <h2>CATALOGUE</h2>
        </div>
        <span className="results-count">{movies.length} FILMS TROUVÉS</span>
      </div>

      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id} onClick={() => onSelect(movie)}>
            <div className="card-img">
              <img src={movie.image} alt={movie.titre} />
              <span className="card-year">{movie.annee}</span>
            </div>
            <div className="card-body">
              <h3>{movie.titre}</h3>
              <p>{movie.genre}</p>
              <div className="stars">
                {"⭐".repeat(movie.note)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}