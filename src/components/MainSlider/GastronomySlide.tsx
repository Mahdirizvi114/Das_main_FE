'use client';
import styles from './GastronomySlide.module.css';

const GastronomySlide = () => {
    const handleReservation = () => {
        window.open('https://das-elb-frontend.onrender.com/', '_blank');
    };

    return (
        <div className={styles.card}>
            {/* Left Col: Image */}
            <div className={styles.imageCol}>
                <img
                    src="/images/gastronomy_plate.png"
                    alt="Gourmet Dining at Das Elb"
                    className={styles.featureImage}
                />
            </div>

            {/* Right Col: Content */}
            <div className={styles.contentCol}>
                <h2 className={styles.sectionTitle}>Gastronomy</h2>
                <span className={styles.subtitle}>DAS ELB KULINARIK</span>

                <h3 className={styles.roomTitle}>A Taste of the Elbe</h3>

                <p className={styles.description}>
                    Immerse yourself in a culinary journey where regional freshness meets modern creativity.
                    At Das ELB, we celebrate the art of dining with exquisite dishes prepared from the finest local ingredients.
                    From dry-aged steaks to delicate seafood, every plate is a masterpiece designed to delight your senses.
                    Enjoy your meal with a breathtaking view of the river, creating an unforgettable atmosphere of relaxation and indulgence.
                </p>

                <ul className={styles.features}>
                    <li className={styles.featureItem}>Regional & Seasonal Ingredients</li>
                    <li className={styles.featureItem}>Exquisite Wine Selection</li>
                    <li className={styles.featureItem}>Riverside Terrace Dining</li>
                    <li className={styles.featureItem}>Modern & Elegant Atmosphere</li>
                </ul>

                <button className={styles.ctaBtn} onClick={handleReservation}>
                    Reserve Table
                </button>
            </div>
        </div>
    );
};

export default GastronomySlide;
