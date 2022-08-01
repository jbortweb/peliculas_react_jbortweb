import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home'
import Movies from './components/movies/Movies';
import Series from './components/series/Series';
import SeriesTv from './components/seriesTv/SeriesTv';
import MoviesFilm from './components/moviesFilm/MoviesFilm';

function App() {
  return (
    <div className="App">
      <div className='title'>
            <h1>Aplicación de peliculas con el API de themoviedb por jbortweb</h1>
        </div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/peliculas_react_jbortweb' element = {<Home/>}/>
        <Route exact path = '/series' element = {<Series/>}/> 
        <Route exact path = '/peliculas' element = {<Movies/>}/>         
        <Route exact path = '/tv/:seriesType' element = {<SeriesTv/>}/>        
        <Route exact path = '/movie/:moviesType' element = {<MoviesFilm/>} />    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
