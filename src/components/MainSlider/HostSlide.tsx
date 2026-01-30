'use client';
import styles from './HostSlide.module.css';

const HostSlide = () => {
    return (
        <div className={styles.card}>
            {/* Left Col: Image */}
            <div className={styles.imageCol}>
                <img
                    src="/images/host_bhupinder_singh.jpg"
                    alt="Bhupinder Singh - Host"
                    className={styles.featureImage}
                />
            </div>

            {/* Right Col: Content */}
            <div className={styles.contentCol}>
                <h2 className={styles.sectionTitle}>Meet the Host</h2>
                <span className={styles.subtitle}>YOUR WELCOME PARTNER</span>

                <h3 className={styles.hostName}>Bhupinder Singh</h3>
                <span className={styles.hostRole}>Owner</span>

                <blockquote className={styles.quote}>
                    "Hospitality is not just about service; it is about creating a home away from home where every guest feels like family."
                </blockquote>

                <p className={styles.description}>
                    With a passion for excellence and a heart for service, Bhupinder Singh has dedicated himself to making Das ELB a sanctuary of comfort and culinary delight.
                    His vision combines the warmth of traditional hospitality with modern luxury, ensuring that every moment of your stay is curated to perfection.
                    Whether you are here for business, a celebration, or a quiet getaway, he and his team are devoted to making your experience unforgettable.
                </p>

                <div className={styles.signature}>Bhupinder Singh</div>
            </div>
        </div>
    );
};

export default HostSlide;
