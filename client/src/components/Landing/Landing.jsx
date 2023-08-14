import React from 'react';
import { Link } from 'react-router-dom';
import styles from './landing.module.css';
import SwiperImg from '../Swiper/Swiper';

export default function LandingPage() {
  return (
    <div className={styles.landing_page}>
      <div className={styles.col1}>
        <div className={styles.swiper}>
          <SwiperImg />
        </div>
      </div>
      <div className={styles.col2}>
        <h4 className={styles.title}>Desk Games</h4>
        <h5 className={styles.subtitle}>La biblioteca de videojuegos mas grande de Latinoamerica</h5>
        <Link to='/home'>
          <button className={styles.btn}>Entrar</button>
        </Link>
      </div>
    </div>
  )
}