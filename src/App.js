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
        <Route path='/' element = {<Home/>} exact/>
        <Route path = '/series' element = {<Series/>} exact /> 
        <Route path = '/peliculas' element = {<Movies/>} exact />         
        <Route path = '/:seriesType' element = {<SeriesTv/>} exact />         
        <Route path = '/:moviesType' element = {<MoviesFilm/>} exact />         
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
