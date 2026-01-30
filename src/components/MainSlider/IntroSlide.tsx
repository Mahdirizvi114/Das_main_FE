'use client';
import styles from './MainSlider.module.css';

const IntroSlide = () => {
    return (
        <div className={styles.card}>
            {/* Left: Text Content */}
            <div className={styles.contentCol}>
                <span className={styles.label}>DAS ELB MAGDEBURG</span>
                <h1 className={styles.title}>Where the River<br />Meets Luxury</h1>
                <p className={styles.description}>
                    Experience the serenity of the Elbe combined with modern architectural brutality and soft hospitality.
                </p>
                <div className={styles.actions}>
                    <button className={styles.primaryBtn}>CHECK IN</button>
                    <button className={styles.secondaryBtn}>EXPLORE ROOMS</button>
                </div>
            </div>

            {/* Right: Feature Image */}
            <div className={styles.imageCol}>
                <img src="/images/das_elb_winter_aerial.jpg" alt="Das Elb Aerial View" className={styles.featureImage} />
            </div>
        </div>
    );
};

export default IntroSlide;
