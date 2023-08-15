import loader_pacman from '../assets/loader_pacman.gif';
import styles from './loader.module.css';

export default function Loader() {
    return (
        <div className={styles.loader}>
            <img src={loader_pacman} alt="loading" />
        </div>
    )
};