import React from 'react';
import './Serie.scss';

const Serie = ({serie}) => {  // Imprime la respuesta de la API
    console.log(serie);
    return <div className='movie'>
        <h4>{serie.title}</h4>
        <img src = {"http://image.tmdb.org/t/p/w185" + serie.poster_path} alt="portada de la pelicúla"/>
        <p>{serie.vote_average}</p>
    </div>
}
export default Serie;