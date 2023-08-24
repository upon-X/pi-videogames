import React from 'react';
import styles from './paginado.module.css'

export default function Paginado({ videogamesPerPage, allVideogames, paginado }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(allVideogames / videogamesPerPage); i++) { //todos los videojuegos dividido los videojuegos por pag que quiero
        pageNumbers.push(i)
    }
    if (pageNumbers.length <= 1) { return null }
    return (
        <div className={styles.pagination_container}>
            {pageNumbers.map(number => (
                <a className={styles.pagination_number} href key={number} onClick={() => paginado(number)}>{number}</a>
            ))}
        </div>
    )
}