import React from 'react'

function MovieCard(props) {
    
    const handleClick = () => {
        const imdbUrl = `https://www.imdb.com/title/${props.imdbID}/`;
        window.open(imdbUrl, '_blank');
    }

    return (
        <div className='movieCard' onClick={handleClick}>
            <img src={props.poster !== "N/A" ? props.poster : "https://via.placeholder.com/200x300/333/666?text=No+Image"} alt={props.title} />
            <div className="movie-info">
                <h2>{props.title}</h2>
                <div className="movie-details">
                    <span className="movie-year">{props.year}</span>
                    <span className="movie-type">{props.type}</span>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;