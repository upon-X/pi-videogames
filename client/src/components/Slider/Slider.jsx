import React, { useState, useEffect } from 'react';
import styles from './slider.module.css';
import image1 from '../../assets/couple-playing.webp'
import image2 from '../../assets/GamingSetup.webp'
import image3 from '../../assets/grandparents-playing.webp'
import image4 from '../../assets/keyboard.webp'
import image5 from '../../assets/lol.webp'
import image6 from '../../assets/random-control.webp'

const images = [image1, image2, image3, image4, image5, image6]

export default function Slider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.slider}>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    style={{
                        transform: `translateX(-${currentImageIndex * 100}%)`
                    }}
                />
            ))}

        </div>
    );
}