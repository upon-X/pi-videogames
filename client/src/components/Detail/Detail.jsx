import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, resetDetail } from '../../redux/actions';
import { useEffect, useState } from 'react';
import styles from './detail.module.css';
import Loader from '../Loader'

export default function Details() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga
    useEffect(() => {
        dispatch(getDetail(id));
        return () => {
            dispatch(resetDetail());
        };
    }, [id, dispatch]);
    useEffect(() => {
        setIsLoading(true); // Cuando se inicia la carga, establecer isLoading en true
        dispatch(getDetail(id)).then(() => {
            setIsLoading(false); // Cuando la carga se completa, establecer isLoading en false
        });
        return () => {
            dispatch(resetDetail());
        };
    }, [id, dispatch]);
    const detail = useSelector((state) => state.detail);

    return (
        <div className={styles.details}>
            {isLoading ? (
                <Loader />
            ) : (
                <div className={styles.container_detail}>
                    <Link to="/home">
                        <button className={styles.btn_home} onClick={() => dispatch(resetDetail())}>
                            Home
                        </button>
                    </Link>
                    <div className={styles.title_container_detail}>
                        <h1 className={styles.title_detail}>{detail.name}</h1>
                        <img className={styles.image_detail} src={detail.background_image ? detail.background_image : detail.image} alt='not found' />
                        <p className={styles.released_detail}><span className={styles.colorGolden}>Released: </span> {detail.released}</p>
                        <p className={styles.platforms_detail}><span className={styles.colorGolden}>Platforms: </span> {detail.id?.length > 7
                            ? detail.platforms?.map(p => p.name).join(' - ')
                            : detail.platforms?.map(p => p.platform.name).join(' - ')
                        }
                        </p>
                        <p className={styles.genres_detail}><span className={styles.colorGolden}>Genres: </span> {detail.genres?.map(g => g.name).join(' - ')}</p>
                        <p className={styles.rating_detail}><span className={styles.colorGolden}>Rating: </span> {detail.rating}</p>
                        <p className={styles.description_detail}>
                            {detail.description || detail.description_raw}
                            {/* {textWithoutTags} */}
                        </p>
                    </div>
                </div>)}
        </div >
    )
}