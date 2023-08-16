import React from 'react';
import { Link } from "react-router-dom";
import styles from './card.module.css';

export default function Card({ name, image, genres, id, rating }) {
    let genre = genres.map((e) => e.name);

    return (
        <div>
            <li className={styles.card_game}>
                <img className={styles.card_image} src={image} alt='not found' />
                <div className={styles.card_info}>
                    <div className={styles.title_name}><h3>{name}</h3></div>
                    <div className={styles.title_genre}>Genre: </div>
                    <div className={styles.genre}><h5>{genre.join('-')}</h5></div>
                    <div className={styles.title_rating}>Rating: </div>
                    <div className={styles.rating}><h6>{rating}</h6></div>
                </div>
                <Link className={styles.detail_button_container} to={'/videogame/' + id}>
                    <button className={styles.detail_button}>Detail</button>
                </Link>
            </li>
        </div>
    );
}