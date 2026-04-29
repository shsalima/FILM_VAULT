import logo from "/public/logo-removebg-preview.png"
import { useState } from "react";
import "../styles/addFilm.css";

export default function AjouterFilm({ isOpen, onClose, onAdd }) {


  const [formData, setFormData] = useState({
    titre: "", description: "", annee: "2026", genre: "Action",
    directeur: "", image: "", note: 0, acteurs: []
  });

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <div className="header-icon-title">
             <div className="red-icon"> <img src={logo}/></div>
             <div className="header-text">
                <h2>Développer le coffre-fort</h2>
                <p>Ajoutez un nouveau chef-d'œuvre à votre collection.</p>
             </div>
          </div>
          <button className="close-x" onClick={onClose}>&times;</button>
        </div>

        <form className="modal-form">
          <div className="form-grid">
            <div className="form-left">
              <label>TITRE DU FILM</label>
              <input type="text" placeholder="e.g. Inception" />
              
              <div className="row">
                <div className="col">
                  <label>ANNÉE</label>
                  <input type="number" defaultValue="2026" />
                </div>
                <div className="col">
                  <label>GENRE</label>
                  <input type="text" defaultValue="Action" />
                </div>
              </div>

              <label>DIRECTEUR</label>
              <input type="text" placeholder="Nom du réalisateur" />

              <label>URL DE L'AFFICHE</label>
              <input type="text" placeholder="https://images.unsplash.com/..." />
            </div>

            <div className="form-right">
              <label>DESCRIPTION</label>
              <textarea placeholder="Résumé du film..."></textarea>

              <label>ACTEURS PRINCIPAUX</label>
              <div className="actors-input">
                <input type="text" placeholder="Ajouter un acteur..." />
                <button type="button" className="btn-add-actor">Ajouter</button>
              </div>

              <label>VOTRE NOTE</label>
              <div className="rating-stars-input">
                <i className="ri-star-fill active"></i>
                <i className="ri-star-fill active"></i>
                <i className="ri-star-fill active"></i>
                <i className="ri-star-line"></i>
                <i className="ri-star-line"></i>
              </div>
            </div>
          </div>

          <div className="form-footer">
             <button type="submit" className="btn-submit-main">Ajouter au catalogue</button>
          </div>
        </form>
      </div>
    </div>
  );
}
