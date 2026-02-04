'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './MainSlider.module.css';

const IntroSlide = () => {
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
            {/* Left: Text Content */}
            <div className={styles.contentCol}>
                <span className={styles.label}>DAS ELB MAGDEBURG</span>
                <h1 className={styles.title}>Wo der Fluss<br />auf Luxus trifft</h1>
                <p className={styles.description}>
                    Erleben Sie die Ruhe der Elbe kombiniert mit moderner Architektur und herzlicher Gastfreundschaft.
                </p>
                <div className={styles.actions}>
                    <button className={styles.primaryBtn}>JETZT BUCHEN</button>
                    <button className={styles.secondaryBtn}>ZIMMER ANSEHEN</button>
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
