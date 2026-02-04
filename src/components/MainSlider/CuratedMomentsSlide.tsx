'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './CuratedMomentsSlide.module.css';

const CuratedMomentsSlide = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className={`${styles.card} ${isVisible ? styles.visible : ''}`} ref={cardRef}>
            <div className={styles.visualContainer}>
                {/* Left Column: Main Image */}
                <div className={styles.leftColumn}>
                    <img
                        src="/images/curated_exterior_day.jpg"
                        alt="Das Elb Architecture"
                        className={styles.image}
                    />

                    <div className={styles.overlayContent}>
                        <div className={styles.overlayText}>
                            <h2 className={styles.sectionTitle}>Ausgewählte Momente</h2>
                            <span className={styles.subtitle}>VISUELLE IMPRESSIONEN</span>
                            <button className={styles.galleryBtn}>ZUR GALERIE</button>
                        </div>
                    </div>
                </div>

                {/* Right Column: 2x2 Grid */}
                <div className={styles.rightGrid}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/images/curated_sign.jpg"
                            alt="Das Elb Signage"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/images/curated_meeting.jpg"
                            alt="Conference Room"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/images/curated_restaurant.jpg"
                            alt="Restaurant Interior"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/images/curated_terrace.jpg"
                            alt="Terrace View"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CuratedMomentsSlide;
