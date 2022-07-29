import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navegador } from '../navegador/Navegador.jsx';
import './Movies.scss';
import Movie from '../movie/Movie';
import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";

const Movies = () => {
  
  const [movies,setMovies] = useState([]);
  const [pages,setpages] = useState(1);
  
  useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9218b9bd6999a8af1b8972bb1b4b815a&language=es-ES&page=${pages}`)
    .then(res => setMovies(res.data.results))
    .catch(console.error);        
  },[pages]);

  const changeplus = () =>{
    setpages (pages + 1);
  }

  const changeless = () => {
    if (pages > 1) {
     setpages (pages - 1);
    }
  }
  

  return (
    <div>
      <div>
        <Navegador movies/>
      </div>
      <div className="container-movies">
        {movies?.map(movie=><Movie key={movie.id} movie={movie}/>)}
      </div>
      <div className='container-icons'>
        <button
        onClick={changeless}
        ><FaArrowLeft/>
        </button>
        <button
        onClick={changeplus}
        ><FaArrowRight/>
        </button>      
      </div>
    </div>
  )
}

export default Movies