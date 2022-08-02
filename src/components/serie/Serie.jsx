import React, { useState } from 'react';
import './Serie.scss';

const Serie = ({serie}) => {  // Imprime la respuesta de la API

    const [show, setShow] = useState(false);

    const abrirModal = () => {
        setShow(true);
    }
    const cerrarModal = () => {
        setShow(false);
    }
    const hideModal = () => {
        setShow(false)
    }
    
    return (
        <>
            <div className='movie'>
                <h4>{serie.name}</h4>
                <img src = {"http://image.tmdb.org/t/p/w185" + serie.poster_path} alt="portada de la pelicúla"/>
                <p>{serie.vote_average}</p>
                <button
                    type = 'button'
                    onClick={abrirModal}
                >Mostrar serie
                </button>
            </div>

                <div className= 'Modal'
                    show={show}
                    onHide={hideModal}
                >
                    <header >
                        <h1>{serie.name}</h1>
                    </header>
                    <body>
                        <img className='carta' src = {"http://image.tmdb.org/t/p/w185" + serie.poster_path} alt="portada de la pelicúla"/>
                        <h3>{serie.title}</h3>
                        <h4>Puntuación: {serie.vote_average}</h4>
                        <h5>Fecha: {serie.release_date}</h5>   
                        <br></br>
                        <h6>Sipnosis</h6>
                        <p>{serie.overview}</p> 
                    </body>
                    <footer>
                        <button 
                            className='button-close'
                            onClick={cerrarModal}
                        >Cerrar
                        </button>
                    </footer>   
                </div>
        </>
    )
}
export default Serie;