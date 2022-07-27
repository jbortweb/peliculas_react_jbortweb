import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MoviesFilm.scss';
import Movie from '../movie/Movie'

const MoviesFilm = () => {

  const {moviesType} = useParams();
  const [movies,setMovies] = useState([]);

  useEffect(()=> {
      axios.get(`https://api.themoviedb.org/3/movie/${moviesType}?api_key=9218b9bd6999a8af1b8972bb1b4b815a&language=es-ES`)
      .then(res => setMovies(res.data.results))
      .catch(console.error);        
  },[moviesType]);

  return <div className="container-movies">
      {movies?.map(movie=><Movie key={movie.id} movie={movie}/>)}

  </div>
}

export default MoviesFilm