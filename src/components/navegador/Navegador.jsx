import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navegador = () => {
        
  return (
    <div className='container'>
        
        <div className='container-button'>
                <nav  className='nav-header'>
                    <ul>
                    <NavLink to='/series'>
                        <li>
                            Series
                        </li>
                    </NavLink>
                    <NavLink to='/movie/popular'>
                        <li>
                            Películas más populares
                        </li>
                    </NavLink>
                    <NavLink to='/movie/top_rated'>
                        <li>
                            Películas más votadas
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    </div>
  )
}
