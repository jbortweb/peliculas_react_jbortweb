import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navegador } from '../navegador/Navegador.jsx';
import Serie from '../serie/Serie.jsx';
import './Series.scss';
import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";

const Series = () => {

    const [series,setSeries] = useState([]);
    const [pages,setpages] = useState(1);


    useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=9218b9bd6999a8af1b8972bb1b4b815a&language=es-ES&page=${pages}`)
        .then(res => setSeries(res.data.results))
        .catch(console.error);        
    	},[series]);

        const changeplus = () => {
          setpages(pages + 1);
        };

        const changeless = () => {
          if (pages > 1) {
            setpages(pages - 1);
          }
        };

  return (
        <div>
            <div>
                <Navegador/>
            </div>
            <div  className= 'container-series'>
                {series?.map(serie=><Serie key={serie.id} serie={serie}/>)}  
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

export default Series