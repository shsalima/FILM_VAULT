import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import "../styles/home.css"
import filmsData from "../data/filmsData";



export default function Home(){
    const [films, setFilms] = useState(() => {
        const savedFilms = localStorage.getItem("films");
        return savedFilms ? JSON.parse(savedFilms) : filmsData;
    });

    useEffect(() => {
        localStorage.setItem("films", JSON.stringify(films));
    }, [films]);
    
    const topRatedMovie = [...films].sort((a, b) => b.note - a.note)[0];



    return(
        <div className="home-div">
            <Header/>
            <Hero topMovie={topRatedMovie} allMovies={films}/>
           

        </div>

          
    )
}