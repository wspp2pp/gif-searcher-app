import React from 'react'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className='card animate__animated animate__fadeIn'>
            {/* Imprime la imagen con su titulo */}
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}
