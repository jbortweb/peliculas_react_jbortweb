import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navegador } from '../../navegador/Navegador';
import Serie from '../serie/Serie';
import './SeriesTv.scss';

const Series = (props) => {
    const {seriesType} = useParams();
    console.log(seriesType)
    const [series,setSeries] = useState([]);

    useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/tv/${seriesType}?api_key=9218b9bd6999a8af1b8972bb1b4b815a&language=es-ES`)
        .then(res => setSeries(res.data.results))
        .catch(console.error);        
    	},[seriesType]);

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