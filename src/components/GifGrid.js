// rafc

// import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs.js'
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( {category} ) => {

    const { data: images, loading } = useFetchGifs( category );

    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //     //Ejecuto función asincrona
    //     getGifs( category )
    //         // img => setImages(img) == setImages
    //         .then ( setImages )
    //     // Le pasamos una lista de deoendencias vacia [] para que no se ejecute mas de una vez
    //     // Solo se ejecuta cuando el componente es renderizado por primera vez
    //     // Al poner [ category ] se ejecutaria cada vez que category cambie, en este caso no cambia
    // }, [ category ])

    // Retorno la categoria pasada como parámetro
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'> { category } </h3>

            { loading && <p className='animate__animated animate__flash'>Loading</p> }

            <div className='card-grid'>
                {
                    images.map( ( img ) => (
                        <GifGridItem 
                            key= { img.id }  
                            //Vuelve a pasar a img como parametro
                            { ...img } 
                        />
                    ))
                }
            </div>
        </>
    )
}
