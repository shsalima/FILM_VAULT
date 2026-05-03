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

export default function Home() {
  const [films, setFilms] = useState(() => {
    const savedFilms = localStorage.getItem("films");
    return savedFilms ? JSON.parse(savedFilms) : filmsData;
  });

  
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const [filterCriteria, setFilterCriteria] = useState({
    titre: "",
    genre: "",
    note: ""
  });


  useEffect(() => {
    localStorage.setItem("films", JSON.stringify(films));
  }, [films]);

  const topRatedMovie = [...films].sort((a, b) => b.note - a.note)[0];

  const openDetails = (film) => {
    setSelectedFilm(film);
    setIsDetailsOpen(true);
  };




const filteredFilms = films.filter((film) => {
    return (
        film.titre.toLowerCase().includes(filterCriteria.titre.toLowerCase()) &&
        film.genre.toLowerCase().includes(filterCriteria.genre.toLowerCase()) &&
        (filterCriteria.note === "" || film.note >= Number(filterCriteria.note))
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
        allMovies={films}
        movies={films}
        onSelect={openDetails}
      />
      <TopMovies movies={films} onSelect={openDetails} />
      <FilmsCatalog movies={filteredFilms} onSelect={openDetails} />

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
