import styles from './about.module.css'
import { Link } from 'react-router-dom';


export default function About() {
    return (
        <div className={styles.about}>
            <Link className={styles.link_btn_home} to='/home'>
                <button className={styles.btn_home}>Home</button>
            </Link>
            <div className={styles.name}>
                Developed by
                Valentino Micheloni
                <span className={styles.role}>Full Stack Web Developer</span>
            </div>
            <div className={styles.presentation}>
                <h3 className={styles.title}>
                    Presentation
                </h3>
                <p className={styles.text}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sint ex laboriosam quae. <span className={styles.colorGolden}>Omnis ad doloribus</span> ex asperiores
                    nesciunt reiciendis, provident dignissimos placeat amet
                    animi! Exercitationem porro magnam itaque distinctio dicta.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae unde quas necessitatibus porro distinctio omnis, Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Inventore hic est sint mollitia sed. Delectus quis aut eveniet eligendi corporis
                    et eos minus sit cupiditate nostrum id, quisquam, atque saepe.
                    placeat tempore expedita, <span className={styles.colorGolden}>rerum impedit aspernatur delectus</span>
                    facilis accusamus veniam libero asperiores aut id voluptate.
                </p>
            </div>
            <h3 className={styles.title}>
                I domain these technologies
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
                    Contact
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