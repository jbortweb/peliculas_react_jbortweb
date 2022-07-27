import './Home.scss';
import { NavLink } from 'react-router-dom';

const Home = () => {
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
                    <NavLink to='/peliculas'>
                        <li>
                            Películas
                        </li>
                    </NavLink>
                </ul>
            </nav>
                
        </div>
    </div>
  )
}

export default Home