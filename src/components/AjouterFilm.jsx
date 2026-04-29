// components/AddMovieModal.jsx
import { useState } from "react";
import "../styles/modal.css";

export default function AjouterFilm({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    titre: "",
    description: "",
    annee: "",
    genre: "",
    realisateur: "",
    acteurs: "",
    image: "",
    trailer: "",
    note: 1,
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // تحويل acteurs من string لـ Array كيفما مطلوب
    const newMovie = {
      ...formData,
      id: Date.now(),
      acteurs: formData.acteurs.split(",").map(item => item.trim()),
      note: Number(formData.note)
    };
    onAdd(newMovie);
    onClose();
    // مسح الفورميلير بعد الإضافة
    setFormData({ titre: "", description: "", annee: "", genre: "", realisateur: "", acteurs: "", image: "", trailer: "", note: 1 });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>AJOUTER UN NOUVEAU FILM</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input type="text" placeholder="Titre du film" required onChange={(e) => setFormData({...formData, titre: e.target.value})} />
            <input type="text" placeholder="Genre" required onChange={(e) => setFormData({...formData, genre: e.target.value})} />
            <input type="number" placeholder="Année" required onChange={(e) => setFormData({...formData, annee: e.target.value})} />
            <input type="text" placeholder="Réalisateur" required onChange={(e) => setFormData({...formData, realisateur: e.target.value})} />
            <input type="text" placeholder="Image URL" required onChange={(e) => setFormData({...formData, image: e.target.value})} />
            <input type="text" placeholder="Trailer URL" required onChange={(e) => setFormData({...formData, trailer: e.target.value})} />
            <input type="number" min="1" max="5" placeholder="Note (1-5)" required onChange={(e) => setFormData({...formData, note: e.target.value})} />
            <input type="text" placeholder="Acteurs (séparés par virgule)" onChange={(e) => setFormData({...formData, acteurs: e.target.value})} />
          </div>
          <textarea placeholder="Description" required onChange={(e) => setFormData({...formData, description: e.target.value})}></textarea>
          <button type="submit" className="save-btn">Enregistrer le film</button>
        </form>
      </div>
    </div>
  );
}