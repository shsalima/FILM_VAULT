  import "../styles/topsFilms.css";

export default function TopMovies({ movies, onSelect }) {
  const topThree = [...movies]
    .sort((a, b) => b.note - a.note)
    .slice(0, 3);

  return (
    <section className="top-movies-section">
      <div className="section-title">
        <div className="icon-bg">
          <i className="ri-trophy-line"></i>
        </div>
        <div>
          <h2>TOP 3 DE LA SEMAINE</h2>
          <p>Les œuvres les mieux notées de votre collection</p>
        </div>
      </div>

      <div className="top-grid">
        {topThree.map((film, index) => (
          <div 
            className="top-card" 
            key={film.id} 
            onClick={() => onSelect(film)}
          >
            <div className="card-badge">#{index + 1}</div>
            <img src={film.image} alt={film.titre} />
            
            <div className="top-card-info">
              <div className="text-content">
                <span className="mini-title">{film.titre}</span>
                <h3>{film.titre}</h3>
                <p>{film.genre}</p>
              </div>
              <div className="top-stars">
                {"⭐".repeat(film.note)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}