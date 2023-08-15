import React from 'react';
import { Link } from 'react-router-dom';
import styles from './landing.module.css';
import Slider from '../Slider/Slider';

export default function LandingPage() {
  return (
    <div className={styles.landing_page}>
      <div className={styles.col1}>
        <Slider className={styles.slider_hover} />
      </div>
      <div className={styles.col2}>
        <h4 className={styles.title}>Desk Games</h4>
        <h5 className={styles.subtitle}>La biblioteca de videojuegos mas grande de Latinoamerica</h5>
        <Link className={styles.btn} to='/home'>Entrar</Link>
      </div>
    </div>
  )
}