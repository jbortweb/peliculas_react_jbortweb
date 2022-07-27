import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navegador = (props) => {
        let {movies} = (props)
        let masVotados = movies ? 'Películas más votadas' : 'Series más votadas';
        let masPopulares = movies ? 'Películas más populares': 'Series más populares';
        let filmOrSerie = movies ? 'Ver series' : 'Ver peliculas';
        let urlFilmOSerie = movies ? '/series' : '/peliculas';
  return (
    <div className='container'>
        
        <div className='container-button'>
                <nav  className='nav-header'>
                    <ul>
                    <NavLink to={urlFilmOSerie}>
                        <li>
                            {filmOrSerie}
                        </li>
                    </NavLink>
                    <NavLink to='/popular'>
                        <li>
                            {masPopulares}
                        </li>
                    </NavLink>
                    <NavLink to='/top_rated'>
                        <li>
                            {masVotados}
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    </div>
  )
}
