import React from 'react';
import './paginado.css'

export default function Paginado({ videogamesPerPage, allVideogames, paginado }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allVideogames / videogamesPerPage); i++) { //todos los videojuegos dividido los videojuegos por pag que quiero
        pageNumbers.push(i)
    }
    return (
        <div className='pagination_container'>
            {pageNumbers && pageNumbers.map(number => (
                <a key={number} href onClick={() => paginado(number)}>{number}</a>
            ))}
        </div>
    )
}