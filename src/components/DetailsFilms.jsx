
import "../styles/details.css";

export default function DetailsFilms({ film, isOpen, onClose, onDelete ,editData}) {
  if (!isOpen || !film) return null;
  const renderStars = (note) => {
    const n = Math.round(Number(note)) || 0;
    return "⭐".repeat(Math.max(0, Math.min(n, 5))); // كياخد بين 0 و 5 نجوم
  };

  return (
    <div className="details-overlay">
      <div className="details-card">
        <button className="close-popup" onClick={onClose}>&times;</button>
        
        <div className="details-flex">
          <div className="details-img">
            <img src={film.image} alt={film.titre} />
          </div>
          
          <div className="details-info">
            <div className="header-info">
                <h2>{film.titre} <span>({film.annee})</span></h2>
{/* <div className="stars">{"⭐".repeat(film.note || 0)}</div> */}
            </div>
            
            <p className="genre-tag">{film.genre}</p>
            <p className="desc">{film.description}</p>
            
            <div className="meta-data">
                <p><strong>Réalisateur:</strong> {film.realisateur}</p>
                <p><strong>Acteurs:</strong> {Array.isArray(film.acteurs) ? film.acteurs.join(", ") : film.acteurs}</p>
            </div>

            <div className="details-actions">
              <button className="btn-edit" onClick={() =>  editData(film)}>
                <i className="ri-edit-line"></i> Modifier
              </button>
              <button className="btn-delete" onClick={() => onDelete(film.id)}>
                <i className="ri-delete-bin-line"></i> Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )



}