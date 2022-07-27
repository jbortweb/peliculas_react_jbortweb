import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navegador } from '../../navegador/Navegador.jsx';
import './Movies.scss';
import Movie from '../movie/Movie';

const Movies = () => {

  const [movies,setMovies] = useState([]);

  useEffect(()=> {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9218b9bd6999a8af1b8972bb1b4b815a&language=es-ES`)
      .then(res => setMovies(res.data.results))
      .catch(console.error);        
  },[]);

  return (
    <div>
      <div>
        <Navegador movies/>
      </div>
      <div className="container-movies">
        {movies?.map(movie=><Movie key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Movies