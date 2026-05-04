// useEffect bach ndiro action mn be3d render f7al localStograge
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import "../styles/home.css";
import filmsData from "../data/filmsData";
import FilmsCatalog from "../components/FilmsCatalog";
import DetailsFilms from "../components/DetailsFilms";
import AjouterFilm from "../components/AjouterFilm";
import TopMovies from "../components/TopsFilm";

import Filter from "../components/FilterFiml";

// smit had technique dyal  ana wast useState ma3titch value khdemt function katsama lazy initialization => l code lidakhm had function kay excute ghie awal mara makay3awdch y excuter fkol render bach mayb9ach y9ra locastorage kola mara
export default function Home() {
  const [films, setFilms] = useState(() => {
    const savedFilms = localStorage.getItem("films");
    // localStorage kay stocker sttring hna 7wlana array dyal films l objet y3ni sttring-> object
    return savedFilms ? JSON.parse(savedFilms) : filmsData;
  });

  
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const [filterCriteria, setFilterCriteria] = useState({
  
    genre: ""
  
  });
// drna had useEffect bach nkhaliw data dyal films mstocke 7ta b3ed render
  useEffect(() => {
    localStorage.setItem("films", JSON.stringify(films));
    // [films]=> dependency array => kat9ol ch7al matbdelt films "awd" dir excution dyal had useEffect
    
  }, [films]);
// [...films]=> spread operator => copy dyal films
  const topRatedMovie = [...films].sort((a, b) => b.note - a.note)[0];

  const openDetails = (film) => {
    setSelectedFilm(film);
    setIsDetailsOpen(true);
  };




const filteredFilms = films.filter((film) => {
    return (

        film.genre.toLowerCase().includes(filterCriteria.genre.toLowerCase()) 
    );
});

  const handleAddMovie = (newMovie) => {
    setFilms([newMovie, ...films]);
  };

  const handleDelete = (id) => {
    if (window.confirm("met2ked bghity t supprimer  had l'film?")) {
      setFilms(films.filter((f) => f.id !== id));
      setIsDetailsOpen(false);
    }
  };



  return (
    <div className="home-div">
      <Header
        onOpenModal={() => setIsModalOpen(true)}
        movies={films}
        onSelect={openDetails}
        filterCriteria={filterCriteria} 
        setFilterCriteria={setFilterCriteria}
      />

      <Hero
        topMovie={topRatedMovie}
        movies={films}
        onSelect={openDetails}
      />

      <TopMovies 
      movies={films}
      onSelect={openDetails}
       />

      <FilmsCatalog 
      movies={filteredFilms} 
      onSelect={openDetails} 
      />

      <DetailsFilms
        film={selectedFilm}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        onDelete={handleDelete}
       
      />

      <AjouterFilm
        isOpen={isModalOpen }
        onClose={() => setIsModalOpen(false)}
        onAdd={ handleAddMovie}

      />

  
    </div>
  );
}
