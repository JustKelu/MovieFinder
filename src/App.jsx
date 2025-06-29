import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
    const [movies, setMovies] = useState([]);
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;

    const handleSearch = (searchTerm) => {
    
        fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                console.log("Risposta API:", data); // DEBUG: vedi cosa arriva
                if (data.Search) {
                    setMovies(data.Search);
                } else {
                    console.log("Nessun risultato trovato:", data); // DEBUG
                    setMovies([]);
                }
            })
            .catch((error) => console.log("Errore:", error))
    }

    return (
        <div className="app">
            <div className="search-section">
                <h1 className="app-title">MovieFinder</h1>
                <SearchBar onSearch={handleSearch}/>
            </div>
            <MovieList movies={movies}/>
        </div>
    )
}

export default App;