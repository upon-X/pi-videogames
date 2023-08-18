import styles from './about.module.css'
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className={styles.about}>
            <Link className={styles.link_btn_home} to='/home'>
                <button className={styles.btn_home}>Home</button>
            </Link>
            <div className={styles.name}>
                <span className={styles.developedby}>Desarrollado por</span>
                Valentino Micheloni
                <span className={styles.role}>Full Stack Web Developer</span>
                <span className={styles.textnotyet}>(not yet)</span>
            </div>
            <div className={styles.presentation}>
                <h3 className={styles.title}>
                    Presentación
                </h3>
                <p className={styles.text}>
                    He desarrollado esta aplicación web a pedido de <span className={styles.colorGolden}>Henry</span> para demostrar mis conocimientos y habilidades
                    adquiridos en el bootcamp. La misma tiene funciones como filtrar por genero, plataforma y procedencia (api o database) de videojuegos,
                    ordenarlos alfabeticamente, buscar por nombre y <span className={styles.colorGolden}>crear los tuyos</span>.
                </p>
            </div>
            <h3 className={styles.title}>
                Tecnologias usadas para el desarrollo
            </h3>
            <div className={styles.technologies}>
                <div className={styles.html}>
                    HTML
                </div>
                <div className={styles.css}>
                    CSS
                </div>
                <div className={styles.js}>
                    JavaScript
                </div>
                <div className={styles.react}>
                    React
                </div>
                <div className={styles.express}>
                    Express
                </div>
                <div className={styles.sequelize}>
                    Sequelize
                </div>
            </div>
            <div className={styles.contact}>
                <h3 className={styles.title}>
                    Contacto
                </h3>
                <div className={styles.redes}>
                    <div>
                        <a target='_blank' href='https://www.linkedin.com/in/valentino-micheloni'>
                            LinkedIn
                        </a>
                    </div>
                    <div>
                        <a target='_blank' href='https://github.com/upon-X'>
                            GitHub
                        </a>
                    </div>
                    <div>
                        <a target='_blank' href='https://vmdeveloper.netlify.app/'>
                            Portfolio
                        </a>
                    </div>
                    <div>
                        <a target='_blank' href='https://docs.google.com/document/d/1nBcSLZMzIaSiHKp2IIKxpls7wEFCU4N0/edit?usp=sharing&ouid=117285709045046880455&rtpof=true&sd=true'>
                            CV
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}