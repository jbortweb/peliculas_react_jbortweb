import React from 'react';
import './Movie.scss';

const Movie = ({movie}) => {  // Imprime la respuesta de la API
    return <div className='movie'>
        <h4>{movie.title}</h4>
        <img src = {"http://image.tmdb.org/t/p/w185" + movie.poster_path} alt="portada de la pelicúla"/>
        <p>{movie.vote_average}</p>
    </div>
}
export default Movie;