import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideogameName } from '../../redux/actions';
import styles from './searchBar.module.css'

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (!name.length) {
            alert('Please enter a videogame');
        } else {
            dispatch(getVideogameName(name));//name es lo q está escribiendo el usuario
            setName('');
        }
    };
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.search_container}>
                <input className={styles.search}
                    type='text'
                    value={name}
                    placeholder='Search videogame ...'
                    onChange={(e) => handleInputChange(e)}
                />
                <button className={styles.button_search} type='submit'>
                    {/* Lupa SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="25" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                </button>
            </div>
        </form>
    )
}
