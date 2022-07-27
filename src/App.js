import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home'
import Movies from './components/movies/Movies';
import Series from './components/series/Series';

function App() {
  return (
    <div className="App">
      <div className='title'>
            <h1>Aplicación de peliculas con el API de themoviedb por jbortweb</h1>
        </div>
      <BrowserRouter>
      <Home/>     
      <Routes>
        <Route path = '/series' element = {<Series/>} exact /> 
        <Route path = '/peliculas' element = {<Movies/>} exact />         
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
