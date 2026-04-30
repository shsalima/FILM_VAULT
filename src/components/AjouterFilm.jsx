import logo from "/public/logo-removebg-preview.png"
import { useEffect, useState } from "react";
import "../styles/addFilm.css";

export default function AjouterFilm({ isOpen, onClose, onAdd , editData}) {


  const [formData, setFormData] = useState({id: null,
    titre: "", description: "", annee: "", genre: "",
    directeur: "", image: "", note: 0, acteurs: []
  });


   useEffect(()=>{
    if(editData){
      setFormData(editData)
    }else{
      setFormData({id: null,titre:"",description:"",annee: "", genre: "",
    directeur: "", image: "", note: 0, acteurs: []})
    }
  },[editData,isOpen])


    if (!isOpen) return null;



  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};



const handleSubmit = (e) => {
    e.preventDefault();
  
  const safeNote = Number(formData.note) || 0;

    const filmToSubmit = editData 
      ? { ...formData, note: safeNote } 
      : { ...formData, id: Date.now(), note: safeNote }; 
    
    onAdd(filmToSubmit);
    onClose();
  };

 


  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <div className="header-icon-title">
             <div className="red-icon"> <img src={logo}/></div>
             <div className="header-text">
                <h2>{editData ? "Modifier le film" : "Développer le coffre-fort"}</h2>
                <p>Ajoutez un nouveau chef-d'œuvre à votre collection.</p>
             </div>
          </div>
          <button className="close-x" onClick={onClose}>&times;</button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-left">
              <label>TITRE DU FILM</label>
              <input type="text" placeholder="e.g. Inception"  name="titre"
  value={formData.titre} 
  onChange={handleChange}/>
              
              <div className="row">
                <div className="col">
                  <label>ANNÉE</label>
                  <input type="number" defaultValue="2026" name="annee"
  value={formData.annee} 
  onChange={handleChange} />
                </div>
                <div className="col">
                  <label>GENRE</label>
                  <input type="text" defaultValue="Action" name="genre"
  value={formData.genre} 
  onChange={handleChange}/>
                </div>
              </div>

              <label>DIRECTEUR</label>
              <input type="text" placeholder="Nom du réalisateur" name="directeur"
  value={formData.directeur} 
  onChange={handleChange}/>

              <label>URL DE L'AFFICHE</label>
              <input type="text" placeholder="https://images.unsplash.com/..." name="image"
    value={formData.image} 
    onChange={handleChange}/>
            </div>

            <div className="form-right">
              <label>DESCRIPTION</label>
              <textarea placeholder="Résumé du film..."  name="description"
  value={formData.description} 
  onChange={handleChange} 
  ></textarea>

              <label>ACTEURS PRINCIPAUX</label>
              <div className="actors-input">
                <input type="text" placeholder="Ajouter un acteur..." />
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
             <button type="submit" className="btn-submit-main" onClick={(e) => {
  e.preventDefault();
  onAdd(formData);
  onClose();
}}>{editData ? "Enregistrer les modifications" : "Ajouter au catalogue"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
