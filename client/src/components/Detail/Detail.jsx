import React from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../redux/actions';
import { useEffect } from "react";
import styles from './detail.module.css'

export default function Details() {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getDetail(id));
    }, [id, dispatch]);
    const detail = useSelector((state) => state.detail);
    function handleReset() {
        dispatch(getDetail());
    }
    function removeBreakTags(input) {
        return input.replace(/<br\s?\/?>/g, '');
    }
    return (
        <div className={styles.details}>
            <div className={styles.container_detail}>
                <Link to={'/home'} onClick={handleReset}>
                    <button className={styles.button_home}>home</button>
                </Link>
                <div className={styles.title_container_detail}>
                    <h1 className={styles.title_detail}>{detail.name}</h1>
                    <img className={styles.image_detail} src={detail.background_image ? detail.background_image : detail.image} alt='not found' />
                    <p className={styles.released_detail}>Released: {detail.released}</p>
                    <p className={styles.platforms_detail}>Platforms: {detail.id?.length > 7
                        ? detail.platforms?.map(p => p.name).join(' - ')
                        : detail.platforms?.map(p => p.platform.name).join(' - ')
                    }
                    </p>
                    <p className={styles.genres_detail}>Genres: {detail.genres?.map(g => g.name).join(' - ')}</p>
                    <p className={styles.rating_detail}>Rating: {detail.rating}</p>
                    <p className={styles.description_detail}>Description: {detail.description || detail.description_raw}</p>
                    {/* Con esto saco los <p></p> que trae la descripcion*/}
                </div>
            </div>
        </div >
    )
}