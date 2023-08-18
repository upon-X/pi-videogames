import React from 'react';
import styles from './paginado.module.css'

export default function Paginado({ videogamesPerPage, allVideogames, paginado }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allVideogames / videogamesPerPage); i++) { //todos los videojuegos dividido los videojuegos por pag que quiero
        pageNumbers.push(i)
    }
    if (pageNumbers.length <= 1) { return '' }
    return (
        <div className={styles.pagination_container}>
            {pageNumbers && pageNumbers.map(number => (
                <a className={styles.pagination_number} key={number} href onClick={() => paginado(number)}>{number}</a>
            ))}
        </div>
    )
}