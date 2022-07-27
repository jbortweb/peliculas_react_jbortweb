import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navegador } from '../../navegador/Navegador.jsx';
import Serie from '../serie/Serie.jsx';
import './Series.scss';

const Series = () => {

    const [series,setSeries] = useState([]);

    useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=9218b9bd6999a8af1b8972bb1b4b815a&language=es-ES`)
        .then(res => setSeries(res.data.results))
        .catch(console.error);        
    	},[]);

  return (
        <div>
            <div>
                <Navegador/>
            </div>
            <div  className= 'container-series'>
                {series?.map(serie=><Serie key={serie.id} serie={serie}/>)}  
            </div>
        </div>                
  )
}

export default Series