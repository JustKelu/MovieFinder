import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
    return props.movies.map((movie) => {
        return (
            <MovieCard 
                key={movie.imdbID}
                imdbID={movie.imdbID}
                title={movie.Title} 
                year={movie.Year} 
                poster={movie.Poster} 
                type={movie.Type} 
            />
        )
    });
}

export default MovieList;