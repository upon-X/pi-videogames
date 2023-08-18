import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postVideogame, getGenres, getPlatforms } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './videogameCreate.module.css';
import validate from './validate'

export default function VideogameCreate() {
    const dispatch = useDispatch();
    const genre = useSelector((state) => state.genres);
    const platform = useSelector((state) => state.platforms)
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: '',
        image: '',
        description: '',
        released: '',
        rating: '',
        genres: [],
        platforms: [],
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value // name se refiere a cada casillero q tiene que llenar, por eso en el form aparece name en todos
        })                              // El value son los inputs de arriba que van a ir cambiando de valor a medida q la persona ingrese los datos
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }
    function handleSelectGenre(e) {
        setInput({
            ...input,
            genres: [...input.genres, e.target.value],
        })
    }
    function handleSelectPlatform(e) {
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value]
        })
    };

    function handleDeletePlatform(e) {
        setInput({
            ...input,
            platforms: input.platforms.filter(p => p !== e),
        })
    }

    function handleDeleteGenre(e) {
        setInput({
            ...input, //me traigo el estado anterior
            genres: input.genres.filter(g => g !== e), //filtrar por todo "g" que no sea "e"
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
        if (Object.keys(errors).length === 0) {
            dispatch(postVideogame(input));
            alert('Videogame created 👌');
            setInput({ //seteo todo mi input en cero
                name: '',
                image: '',
                description: '',
                released: '',
                rating: '',
                genres: [],
                platforms: [],
            })
        } else {
            alert('ERROR: videogame not created 😕');
            return;
        }
    }
    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);
    useEffect(() => {
        dispatch(getPlatforms());
    }, [dispatch]);

    return (
        <>
            <div className={styles.create_container}>
                <div className={styles.form_creation}>
                    <Link className={styles.btn_home} to='/home'>Home</Link>
                    <h1 className={styles.lets_go}>¡Let's go!</h1>
                    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <input className={styles.input}
                                placeholder='Videogame Name'
                                type='text'
                                value={input.name}
                                name='name'
                                onChange={(e) => handleChange(e)}
                            />
                            {errors.name && (
                                <p className={styles.error}>{errors.name}</p>
                            )}
                        </div>
                        <div>
                            <input className={styles.input}
                                placeholder='Image URL'
                                type='img'
                                value={input.image}
                                name='image'
                                alt='not found'
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div>
                            <input className={styles.input}
                                placeholder='Description'
                                type='text'
                                value={input.description}
                                name='description'
                                onChange={(e) => handleChange(e)}
                            />
                            {errors.description && (
                                <p className={styles.error}>{errors.description}</p>
                            )}
                        </div>
                        <div className={styles.released_container}>
                            <label className={styles.released}> Released </label>
                            <input className={styles.released_input}
                                type='date'
                                value={input.released}
                                name='released'
                                onChange={(e) => handleChange(e)}
                            />
                            <label className={styles.rating}>Rating </label>
                            <input className={styles.rating_input}
                                placeholder='0 to 5'
                                type='number'
                                value={input.rating}
                                min={0}
                                max={5}
                                name='rating'
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className={styles.genres_container}>
                            <select className={styles.genres_input} onChange={(e) => handleSelectGenre(e)}>
                                <option hidden value='Genres'>Genres</option>
                                {genre.map(g => (
                                    <option key={g.name} value={g.name}>{g.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.platforms_container}>
                            <select className={styles.platforms_input} onChange={(e) => handleSelectPlatform(e)}>
                                <option hidden value='Platforms'>Platforms</option>
                                {platform.map(p => (
                                    <option key={p.name} value={p.name}>{p.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.btn_create}>
                            <button className={styles.create} type='submit'>Create</button>
                        </div>
                    </form>
                </div>
                <div className={styles.x_container}>
                    <div className={styles.x_genres}>
                        <p className={styles.selected_gen}>Genres selected</p>
                        {input.genres.map(g =>
                            <div className={styles.x_genre_container}>
                                <label className={styles.x_genre}>{g}</label>
                                <button className={styles.x_genre_button} onClick={() => handleDeleteGenre(g)}>X</button>
                            </div>
                        )}
                    </div>
                    <div className={styles.x_platforms}>
                        <p className={styles.selected_plat}>Platforms selected</p>
                        {input.platforms.map(p =>
                            <div className={styles.x_platform_container}>
                                <label className={styles.x_platform}>{p}</label>
                                <button className={styles.x_platform_button} onClick={() => handleDeletePlatform(p)}>X</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}



