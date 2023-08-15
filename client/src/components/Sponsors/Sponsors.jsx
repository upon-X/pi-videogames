import styles from './sponsors.module.css'
import image1 from '../../assets/sponsors/g2a.webp'
import image2 from '../../assets/sponsors/compragamer.webp';
import image3 from '../../assets/sponsors/amd.webp';
import image4 from '../../assets/sponsors/riotgames.webp';
import image5 from '../../assets/sponsors/logitech.webp';
import image6 from '../../assets/sponsors/ubisoft.webp';
import image7 from '../../assets/sponsors/microsoft.webp';
import image8 from '../../assets/sponsors/sony.webp';
import image9 from '../../assets/sponsors/corsair.webp';
import image10 from '../../assets/sponsors/telecom.webp';
import image11 from '../../assets/sponsors/redragon.webp';
import image12 from '../../assets/sponsors/nvidia.webp';

export default function Sponsors() {
    return (
        <div className={styles.sponsor}>
            <h3 className={styles.h3sponsor}>
                Sponsors
            </h3>
            <div className={styles.sponsor_container}>
                <div className={styles.sponsor_img}>
                    <img src={image1} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image2} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image3} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image4} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image5} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image6} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image7} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image8} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image9} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image10} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image11} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image12} alt="" />
                </div>
                {/* 12 SPONSORS */}
                <div className={styles.sponsor_img}>
                    <img src={image1} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image2} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image3} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image4} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image5} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image6} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image7} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image8} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image9} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image10} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image11} alt="" />
                </div>
                <div className={styles.sponsor_img}>
                    <img src={image12} alt="" />
                </div>
            </div>
        </div>
    );
}