import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import "../styles/home.css"
import filmsData from "../data/filmsData";
import FilmsCatalog from "../components/FilmsCatalog";
import DetailsFilms from "../components/DetailsFilms";
import AjouterFilm from "../components/AjouterFilm";
import TopMovies from "../components/TopsFilm";
import Footer from "../components/Footer";



export default function Home(){
    const [films, setFilms] = useState(() => {
        const savedFilms = localStorage.getItem("films");
        return savedFilms ? JSON.parse(savedFilms) : filmsData;
    });

    useEffect(() => {
        localStorage.setItem("films", JSON.stringify(films));
    }, [films]);

    const topRatedMovie = [...films].sort((a, b) => b.note - a.note)[0];
           
    const openDetails = (film) => {
    setSelectedFilm(film);
    setIsDetailsOpen(true);
};

const [selectedFilm, setSelectedFilm] = useState(null);
const [isDetailsOpen, setIsDetailsOpen] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);
const [isEditModalOpen, setIsEditModalOpen] = useState(false); // واش المودال ديال التعديل مفتوح
const [movieToEdit, setMovieToEdit] = useState(null);


    const handleAddMovie = (newMovie) => {
  setFilms([newMovie, ...films]);
};

    const handleDelete = (id) => {
    if(window.confirm("Bghiti tmse7 had l'film?")) {
        setFilms(films.filter(f => f.id !== id));
        setIsDetailsOpen(false);
    }
};

         const handleDeleteFilm =(id) => {
            const MasqueFilm=films.filter(fl=>fl.id !==id)
            setFilms(MasqueFilm)
            setIsDetailsOpen(false)
            }

           const handleUpdateFilm=(updateFilm)=>{
            const updateMovie=films.map(f=>
                f.id === updateFilm.id? updateFilm:f
            )
            setFilms(updateMovie)
            setIsDetailsOpen(false)
           } 

           const openEditModal=(film)=>{
            setMovieToEdit(film)
            setIsDetailsOpen(false)
            setIsEditModalOpen(true)
           }



    return(
        <div className="home-div">
            <Header onOpenModal={() => setIsModalOpen(true)}/>
            <Hero topMovie={topRatedMovie} allMovies={films} onSelect={openDetails}/>
            <TopMovies movies={films} onSelect={openDetails}/>
            <FilmsCatalog movies={films}  onSelect={openDetails} />
     
            <DetailsFilms film={selectedFilm} 
  isOpen={isDetailsOpen} 
  onClose={() => setIsDetailsOpen(false)}
  onDelete={handleDeleteFilm}
  editData={openEditModal}
  />


            <AjouterFilm  isOpen={isModalOpen || isEditModalOpen}
  onClose={() => {
    setIsModalOpen(false);
    setIsEditModalOpen(false);
    setMovieToEdit(null);}}
  onAdd={movieToEdit ? handleUpdateFilm : handleAddMovie}
  editData={movieToEdit}/>

           


        <Footer/>
          
           

        </div>

          
    )
}