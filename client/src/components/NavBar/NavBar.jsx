import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames } from '../../redux/actions';

export default function Navbar({ handleFilterGenre, handleFilterCreated, handleRating, handleSort, handleFilterPlatforms }) {
    const allGenre = useSelector(state => state.genres);
    const allPlatforms = useSelector(state => state.platforms);
    const dispatch = useDispatch()
    function handleClick(e) {
        e.preventDefault();
        dispatch(getVideogames());
    };
    return (
        <div>
            <div className={styles.buttons}>
                <div className={styles.button_container}>
                    <Link className={styles.button_about} to='/about'>About 💼</Link>
                    <Link className={styles.button_create_videogame} to='/videogame'>Create Videogame 🎮</Link>
                    <button className={styles.button_reload} onClick={(e) => { handleClick(e) }}>Reload Filters🔄</button>
                </div>
                <div>
                    <SearchBar />
                </div>
            </div>
            <div className={styles.navbar_container}>
                <select className={styles.select} onChange={(e) => handleSort(e)}>
                    <option hidden value=''>Sort</option>
                    <option value='Asc'>A-Z</option>
                    <option value='Desc'>Z-A</option>
                </select>
                <select className={styles.select} onChange={(e) => handleRating(e)}>
                    <option hidden value=''>Rating</option>
                    <option value="Top">Rating ⭸</option>
                    <option value="Low">Rating ⭷</option>
                </select>
                <select className={styles.select} onChange={(e) => handleFilterCreated(e)}>
                    <option hidden value=''>Filter by</option>
                    <option value='All'>All</option>
                    <option value='Created'>Created</option>
                    <option value='Api'>Api</option>
                </select>
                <select className={styles.select} onChange={(e) => handleFilterGenre(e)}>
                    <option hidden value=''>Genres</option>
                    <option value='All'>All</option>
                    {allGenre.map((genre) => (
                        <option key={genre.name} value={genre.name}>
                            {genre.name}
                        </option>
                    ))}
                </select>
                <select className={styles.select} onChange={(e) => handleFilterPlatforms(e)}>
                    <option hidden value=''>Platforms</option>
                    <option value='All'>All</option>
                    {allPlatforms.map((platform) => (
                        <option key={platform.name} value={platform.name}>
                            {platform.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}