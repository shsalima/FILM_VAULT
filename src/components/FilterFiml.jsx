
export default function Filter({ filterCriteria, setFilterCriteria }) {
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria({ ...filterCriteria, [name]: value });
  };

  return (
    <div className="div-filter">
      <h2><i className="ri-filter-2-line"></i> FILTRER VOTRE BIBLIOTHÈQUE</h2>
      <div className="filter">

        
      
        <input 
          type="text" 
          name="genre" 
          placeholder="Tous les Genres" 
          value={filterCriteria.genre}
          onChange={handleChange}
        />

       
      
      </div>
    </div>
  );
}