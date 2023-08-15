import styles from './about.module.css'
import { Link } from 'react-router-dom';


export default function About() {
    return (
        <div className={styles.about}>
            <Link className={styles.btn_home} to='/home'>Home</Link>
            <div className={styles.name}>
                Valentino Micheloni
                <span className={styles.role}>Full Stack Web Developer</span>
            </div>
        </div>
    )
}