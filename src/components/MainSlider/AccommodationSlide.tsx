'use client';
import { useState } from 'react';
import styles from './AccommodationSlide.module.css';

const AccommodationSlide = () => {
    // Only one 'tab' now, state helps with potential future expansion but currently static
    const [activeTab, setActiveTab] = useState<'das_elb'>('das_elb');
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const content = {
        das_elb: {
            label: 'Das Elb Restaurant',
            title: 'Exquisite International Cuisine.',
            price: '€12.90 - €45.00',
            images: ['/images/restaurant_fine_dining.png'],
            features: [
                'Dry-Aged Steaks & Seafood',
                'Traditional Wiener Schnitzel',
                'Authentic Asian Curries',
                'Fresh & Healthy Bowls',
                'Exclusive Desserts'
            ],
            cta: 'VIEW MENU',
            link: 'https://das-elb-frontend.onrender.com/'
        }
    };

    const activeContent: any = content[activeTab];

    const nextImage = () => {
        if (activeContent.images.length > 1) {
            setCurrentImgIndex((prev) =>
                prev === activeContent.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (activeContent.images.length > 1) {
            setCurrentImgIndex((prev) =>
                prev === 0 ? activeContent.images.length - 1 : prev - 1
            );
        }
    };

    const handleCtaClick = () => {
        if (activeContent.link && activeContent.link !== '#') {
            window.open(activeContent.link, '_blank');
        }
    };

    return (
        <div className={styles.card}>
            {/* Left Col: Image Slider */}
            <div className={styles.imageCol}>
                {activeContent.images.length > 1 && (
                    <button className={`${styles.imgArrow} ${styles.prevImg}`} onClick={prevImage}>&lt;</button>
                )}

                <img
                    src={activeContent.images[currentImgIndex]}
                    alt={activeContent.label}
                    className={styles.featureImage}
                />

                {activeContent.images.length > 1 && (
                    <button className={`${styles.imgArrow} ${styles.nextImg}`} onClick={nextImage}>&gt;</button>
                )}
            </div>

            {/* Right Col: Content */}
            <div className={styles.contentCol}>
                <h2 className={styles.sectionTitle}>Restaurants</h2>
                <span className={styles.subtitle}>{activeContent.label}</span>

                {/* Tabs Removed - Single Restaurant View */}
                <div style={{ marginBottom: '2rem' }}></div>

                {/* Dynamic Room Data */}
                <h3 className={styles.roomTitle}>{activeContent.title}</h3>

                <div className={styles.priceBlock}>
                    <span className={styles.priceLabel}>Price Range</span>
                    <span className={styles.price}>{activeContent.price}</span>
                    <br />
                    <span className={styles.priceSuffix}>/ per person</span>
                </div>

                <ul className={styles.features}>
                    {activeContent.features.map((feature, idx) => (
                        <li key={idx} className={styles.featureItem}>{feature}</li>
                    ))}
                </ul>

                <button className={styles.ctaBtn} onClick={handleCtaClick}>{activeContent.cta}</button>
            </div>
        </div>
    );
};

export default AccommodationSlide;
