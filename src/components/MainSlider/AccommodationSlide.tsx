'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './AccommodationSlide.module.css';

// Room Types
type RoomContent = {
    label: string; // for tab name
    title: string; // large headline
    priceLabel: string;
    price: string;
    priceSuffix: string;
    images: string[];
    features: string[];
    cta: string;
};

const AccommodationSlide = () => {
    const [activeTab, setActiveTab] = useState<'sanctuary' | 'river_view' | 'island_suite'>('sanctuary');
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [fadeState, setFadeState] = useState(true); // Control opacity during transition

    const content: Record<string, RoomContent> = {
        sanctuary: {
            label: 'The Sanctuary',
            title: 'Soft light, flowing water, and space to slow down.',
            priceLabel: 'Best-Preis-Rate',
            price: '€129.00',
            priceSuffix: '/ Total price',
            images: [
                '/images/sanctuary_1_1770192956257.png',
                '/images/sanctuary_2_1770192972843.png',
                '/images/sanctuary_3_1770192990207.png'
            ],
            features: [
                'Cancellable free of charge until 6 PM',
                'No credit card required',
                'No prepayment needed',
                'Without catering',
                '3 services included'
            ],
            cta: 'ENTER THE SANCTUARY'
        },
        river_view: {
            label: 'River View',
            title: 'Wake up to the rhythm of the Elbe.',
            priceLabel: 'Flexible Rate',
            price: '€185.00',
            priceSuffix: '/ Night',
            images: [
                '/images/river_view_1_1770193004999.png',
                '/images/river_view_2_1770193019906.png',
                '/images/river_view_3_1770193035005.png'
            ],
            features: [
                'Direct river view',
                'Morning sun',
                'Breakfast included',
                'Free cancellation until 24h',
                'Welcome drink included'
            ],
            cta: 'ENTER THE SANCTUARY' // Keeping consistent CTA
        },
        island_suite: {
            label: 'Island Suite',
            title: 'A private kingdom floating above the city.',
            priceLabel: 'Premium Rate',
            price: '€240.00',
            priceSuffix: '/ Night',
            images: [
                '/images/island_suite_1_1770193052280.png',
                '/images/island_suite_2_1770193068023.png',
                '/images/island_suite_3_1770193086082.png'
            ],
            features: [
                'Panoramic balcony',
                'Separate living area',
                'Luxury breakfast included',
                'Late checkout available',
                'Access to private lounge'
            ],
            cta: 'ENTER THE SANCTUARY'
        }
    };

    const activeContent = content[activeTab];

    // Reset image index when tab changes
    useEffect(() => {
        setCurrentImgIndex(0);
        setFadeState(true);
    }, [activeTab]);

    // Auto slide logic
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 20000); // 20 seconds

        return () => clearInterval(interval);
    }, [activeTab, currentImgIndex]); // Reset timer on interaction

    const navigateImage = (newIndex: number) => {
        // Simple fade out/in effect could be added here if needed, but CSS transition handles opacity
        setCurrentImgIndex(newIndex);
    };

    const nextImage = () => {
        const next = currentImgIndex === activeContent.images.length - 1 ? 0 : currentImgIndex + 1;
        navigateImage(next);
    };

    const prevImage = () => {
        const prev = currentImgIndex === 0 ? activeContent.images.length - 1 : currentImgIndex - 1;
        navigateImage(prev);
    };

    // Intersection Observer for animation
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
            {/* Left Col: Image Slider */}
            <div className={styles.imageCol}>
                {activeContent.images.length > 1 && (
                    <button className={`${styles.imgArrow} ${styles.prevImg}`} onClick={prevImage} aria-label="Previous Image">&lt;</button>
                )}

                {activeContent.images.map((src, idx) => (
                    <img
                        key={`${activeTab}-${idx}`}
                        src={src}
                        alt={`${activeContent.label} View ${idx + 1}`}
                        className={styles.featureImage}
                        style={{ opacity: idx === currentImgIndex ? 1 : 0 }}
                    />
                ))}

                {activeContent.images.length > 1 && (
                    <button className={`${styles.imgArrow} ${styles.nextImg}`} onClick={nextImage} aria-label="Next Image">&gt;</button>
                )}
            </div>

            {/* Right Col: Content */}
            <div className={styles.contentCol}>
                <h2 className={styles.sectionTitle}>Accommodations</h2>
                <span className={styles.subtitle}>SELECT YOUR SANCTUARY</span>

                {/* Tabs */}
                <div className={styles.tabsContainer}>
                    <button
                        className={`${styles.tabBtn} ${activeTab === 'sanctuary' ? styles.active : ''}`}
                        onClick={() => setActiveTab('sanctuary')}
                    >
                        The Sanctuary
                    </button>
                    <button
                        className={`${styles.tabBtn} ${activeTab === 'river_view' ? styles.active : ''}`}
                        onClick={() => setActiveTab('river_view')}
                    >
                        River View
                    </button>
                    <button
                        className={`${styles.tabBtn} ${activeTab === 'island_suite' ? styles.active : ''}`}
                        onClick={() => setActiveTab('island_suite')}
                    >
                        Island Suite
                    </button>
                </div>

                {/* Dynamic Room Data */}
                <h3 className={styles.roomTitle}>{activeContent.title}</h3>

                <div className={styles.priceBlock}>
                    <span className={styles.priceLabel}>{activeContent.priceLabel}</span>
                    <span className={styles.price}>{activeContent.price}</span>
                    <span className={styles.priceSuffix}>{activeContent.priceSuffix}</span>
                </div>

                <ul className={styles.features}>
                    {activeContent.features.map((feature, idx) => (
                        <li key={idx} className={styles.featureItem}>{feature}</li>
                    ))}
                </ul>

                <button className={styles.ctaBtn}>{activeContent.cta}</button>
            </div>
        </div>
    );
};

export default AccommodationSlide;
