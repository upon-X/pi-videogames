import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getGenres, filterVideogamesByGenre, filterCreated, orderByName, orderByRating, getPlatforms, filterVideogamesByPlatforms } from '../../redux/actions';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Paginado from '../Paginado';
import Navbar from '../NavBar/NavBar';
import Loader from '../Loader';
import './home.css'

export default function Home() {
    const dispatch = useDispatch() // Conectamos el dispatch de Redux
    const allVideogames = useSelector((state) => state.videogames) // Con useSelector hago q me traiga todos los VGs guardados
    const [currentPage, setCurrentPage] = useState(1) // Seguimiento de la pagina actual, 1 porque es la primera
    const [videogamesPerPage, setVideogamesPerPage] = useState(20) // Determino cuantos VGs se renderizan por pagina
    const [order, setOrder] = useState('') // State para el orden asc y desc
    const indexOfLastVideogame = currentPage * videogamesPerPage
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage
    const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame)// VGs en la pagina actual
    const paginado = (pageNumber) => { //Funcion para cambiar de pagina
        setCurrentPage(pageNumber)
    }

    // Traigo genres y platforms cuando el componente se monta
    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms()); // Dispatch para obtener generos y plataformas
    }, [dispatch]);
    // Traigo los VGs cuando el componente se monta
    useEffect(() => {
        dispatch(getVideogames()); // Dispatch para obtener los VGs
    }, [dispatch]);

    if (!allVideogames.length) return <Loader />; // Renderiza el loader hasta que se habilite la data del VG
    // Handle para ordenar por nombres
    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1); //seteame la pagina a la 1ra
        setOrder(e.target.value);
    };
    // Handle para filtrar por los generos
    function handleFilterGenre(e) {
        e.preventDefault();
        dispatch(filterVideogamesByGenre(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    };
    // Handle para filtrar por platforms
    function handleFilterPlatforms(e) {
        e.preventDefault();
        dispatch(filterVideogamesByPlatforms(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    };
    // Handle para filtrar por los viedeojuegos creados en la DB
    function handleFilterCreated(e) {
        e.preventDefault();
        dispatch(filterCreated(e.target.value));//el payload
        setCurrentPage(1);
        setOrder(e.target.value);
        if (!e.target.value) alert('No existen videojuegos creados')
    };
    // Handle para filtrar por los ratings
    function handleRating(e) {
        e.preventDefault();
        dispatch(orderByRating(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    }
    return (
        <div>
            <div className="create_container"></div>
            <Link className='button_create_videogame' to='/videogame'>Crear Videogame</Link>

            <div>
                <Navbar
                    handleSort={handleSort}
                    handleRating={handleRating}
                    handleFilterCreated={handleFilterCreated}
                    handleFilterGenre={handleFilterGenre}
                    handleFilterPlatforms={handleFilterPlatforms}
                />
            </div>
            <ul className='card_grid'>
                {currentVideogames?.map((g) => {
                    return (
                        <Card
                            id={g.id}
                            name={g.name}
                            image={g.image}
                            genres={g.genres}
                            key={g.id}
                            rating={g.rating}
                            platforms={g.platforms} />
                    );
                })}
            </ul>
            <div className='pagination'>
                <Paginado
                    videogamesPerPage={videogamesPerPage}
                    allVideogames={allVideogames.length}
                    paginado={paginado} />
            </div>
            <div>
                <Link to='/'>landing</Link>
            </div>
        </div>
    )
}