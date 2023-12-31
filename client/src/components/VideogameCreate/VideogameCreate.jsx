import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { postVideogame, getGenres, getPlatforms } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './videogameCreate.module.css';
import validate from './validate'

export default function VideogameCreate() {
    const dispatch = useDispatch();
    const genre = useSelector((state) => state.genres); //Usamos useSelector para sacar partes especificas del Redux store
    const platform = useSelector((state) => state.platforms)
    const gameNames = useSelector((state) => state.videogames.map(game => game.name));
    const [descriptionCount, setDescriptionCount] = useState(0);
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
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }
    function handleSelectGenre(e) {
        const selectedGenres = e.target.value
        if (!input.genres.includes(selectedGenres)) {
            setInput({
                ...input,
                genres: [...input.genres, e.target.value],
            })
        } else {
            window.alert('Ya esta agregado el genero')
        }
    }
    function handleSelectPlatform(e) {
        const selectedPlatforms = e.target.value
        if (!input.platforms.includes(selectedPlatforms)) {
            setInput({
                ...input,
                platforms: [...input.platforms, selectedPlatforms]
            })
            setErrors(validate({
                ...input,
                platforms: [...input.platforms, selectedPlatforms]
            }));
        } else {
            window.alert('Ya esta agregado la plataforma')
        }
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
    function handleDescriptionChange(e) {
        const descriptionValue = e.target.value;
        if (descriptionValue.length <= 500) {
            setInput({
                ...input,
                description: descriptionValue,
            });
            setDescriptionCount(descriptionValue.length);
            setErrors(validate({
                ...input,
                [e.target.name]: e.target.value
            }));
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
        console.log(input, errors)
        if (Object.keys(errors).length === 0 && input.name && input.description && input.released && input.genres && input.platforms) {
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
    function handleNameChange(e) {
        const newName = e.target.value;
        if (gameNames.includes(newName)) {
            setErrors({
                ...errors,
                name: 'This name is already in use, choose another',
            });
        } else {
            setErrors(
                validate({
                    ...input,
                    [e.target.name]: e.target.value,
                })
            );
        }
        setInput({
            ...input,
            name: newName,
        });
    }
    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
        validate(input)
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
                                minLength={2}
                                maxLength={30}
                                onChange={(e) => handleNameChange(e)}
                            />
                            {errors.name && (
                                <p className={styles.error}>{errors.name}</p>
                            )}
                        </div>
                        <div>
                            <input className={styles.input}
                                placeholder='Image URL (optional)'
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
                                onChange={(e) => handleDescriptionChange(e)}
                            />
                            <div className={descriptionCount === 0 ? `${styles.nozero}` : `${styles.character_count}`}>
                                {descriptionCount}/500 caracteres
                            </div>
                            <div>
                                {errors.description && (
                                    <p className={styles.error}>{errors.description}</p>
                                )}
                            </div>
                        </div>
                        <div className={styles.released_container}>
                            <label className={styles.released}> Released </label>
                            <input className={styles.released_input}
                                type='date'
                                value={input.released}
                                name='released'
                                min='1958-10-01'
                                max={new Date().toISOString().split('T')[0]} //Bloquea las fechas hasta hoy
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
                                pattern="\d+" // Acepta solo números enteros
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className={styles.errors_rr}>
                            {errors.released && (
                                <p className={styles.error}>{errors.released}</p>
                            )}
                            {errors.rating && (
                                <p className={`${styles.error} ${styles.error_rating}`}>{errors.rating}</p>
                            )}
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
            </div >
        </>
    )
}