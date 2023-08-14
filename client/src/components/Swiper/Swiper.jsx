import React from 'react';
import image1 from '../../assets/GamingSetup.jpg'
import image2 from '../../assets/random-control.jpg'
import image3 from '../../assets/gametime.jpg'
import styles from './swiper.module.css'
import { Swiper, SwiperSlide } from 'react-id-swiper';

export default function SwiperImg() {
    const swiperParams = {
        spaceBetween: 30,
        slidesPerView: 3,
        loop: true,
    };

    return (
        <div className={styles.swiper}>

        <Swiper {...swiperParams}>
            <SwiperSlide><img src={image1} alt="Imagen 1" /></SwiperSlide>
            <SwiperSlide><img src={image2} alt="Imagen 2" /></SwiperSlide>
            <SwiperSlide><img src={image3} alt="Imagen 3" /></SwiperSlide>
            {/* Agrega más diapositivas de imagen según sea necesario */}
        </Swiper>
        </div>
    );
};