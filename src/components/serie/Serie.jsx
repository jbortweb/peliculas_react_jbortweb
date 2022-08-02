import React from 'react';
import './Serie.scss';

const Serie = ({serie}) => {  // Imprime la respuesta de la API
    return <div className='movie'>
        <h4>{serie.name}</h4>
        <img src = {"https://image.tmdb.org/t/p/w185" + serie.poster_path} alt="portada de la pelicúla"/>
        <p>{serie.vote_average}</p>
    </div>
}
export default Serie;