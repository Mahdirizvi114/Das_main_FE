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
                <h2 className={styles.sectionTitle}>Gastronomie</h2>
                <span className={styles.subtitle}>DAS ELB KULINARIK</span>

                <h3 className={styles.roomTitle}>Ein Geschmack der Elbe</h3>

                <p className={styles.description}>
                    Tauchen Sie ein in eine kulinarische Reise, bei der regionale Frische auf moderne Kreativität trifft.
                    Im Das ELB zelebrieren wir die Kunst des Speisens mit exquisiten Gerichten aus den besten lokalen Zutaten.
                    Von Dry-Aged Steaks bis hin zu feinen Meeresfrüchten ist jeder Teller ein Meisterwerk, das Ihre Sinne verwöhnen soll.
                    Genießen Sie Ihr Essen mit einem atemberaubenden Blick auf den Fluss und erleben Sie eine unvergessliche Atmosphäre der Entspannung und des Genusses.
                </p>

                <ul className={styles.features}>
                    <li className={styles.featureItem}>Regionale & saisonale Zutaten</li>
                    <li className={styles.featureItem}>Exquisite Weinauswahl</li>
                    <li className={styles.featureItem}>Speisen auf der Flussterrasse</li>
                    <li className={styles.featureItem}>Moderne & elegante Atmosphäre</li>
                </ul>

                <button className={styles.ctaBtn} onClick={handleReservation}>
                    Tisch reservieren
                </button>
            </div>
        </div>
    );
};

export default GastronomySlide;
