import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavegadorSeries = () => {
  return (
    <div className='container'>
        
        <div className='container-button'>
                <nav  className='nav-header'>
                    <ul>
                    <NavLink to='/peliculas'>
                        <li>
                            Películas
                        </li>
                    </NavLink>
                    <NavLink to='/tv/popular'>
                        <li>
                            Series más populares
                        </li>
                    </NavLink>
                    <NavLink to='/tv/top_rated'>
                        <li>
                            Series más votadas
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    </div>
  )
}
