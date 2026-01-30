'use client';
import { useState } from 'react';
import styles from './ConferenceSlide.module.css';

const ConferenceSlide = () => {
    const [activeTab, setActiveTab] = useState<'packages' | 'celebrations'>('packages');
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const content = {
        packages: {
            label: 'Tagungspakete',
            title: 'Perfekt organisiert',
            price: 'ab 59,00 €',
            priceSuffix: '/ pro Person',
            images: ['/images/conference_room.jpg'],
            features: [
                'Starter (halbtags): Kaffeepause, Getränke - ab 59€',
                'Starter Plus: 2 Pausen, Lunch/Abendessen - ab 89€',
                'Komfort: Komplettverpflegung - ab 119€',
                'Inkl. Beamer, Leinwand, Flipchart, Koffer',
                'WLAN & Parkplätze inklusive'
            ],
            cta: 'ANFRAGEN',
            link: '#'
        },
        celebrations: {
            label: 'Tagen & Feiern',
            title: 'Raum für Ideen',
            price: '80 qm',
            priceSuffix: '/ Fläche',
            images: ['/images/conference_building.jpg'],
            features: [
                'Moderne Ausstattung mit Klimatisierung',
                'Direkter Terrassenzugang mit Elbblick',
                'Parlamentarisch: 20 Personen',
                'U-Form / E-Form: 25 Personen',
                'Tafel / Block: 30 Personen'
            ],
            cta: 'MEHR INFOS',
            link: '#'
        }
    };

    const activeContent = content[activeTab];

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
                <h2 className={styles.sectionTitle}>Konferenzen</h2>
                <span className={styles.subtitle}>{activeContent.label}</span>

                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${activeTab === 'packages' ? styles.activeTab : ''}`}
                        onClick={() => { setActiveTab('packages'); setCurrentImgIndex(0); }}
                    >
                        Tagungspakete
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'celebrations' ? styles.activeTab : ''}`}
                        onClick={() => { setActiveTab('celebrations'); setCurrentImgIndex(0); }}
                    >
                        Räume & Feiern
                    </button>
                </div>

                <h3 className={styles.roomTitle}>{activeContent.title}</h3>

                <div className={styles.priceBlock}>
                    <span className={styles.priceLabel}>{activeTab === 'packages' ? 'Preis ab' : 'Größe'}</span>
                    <span className={styles.price}>{activeContent.price}</span>
                    <br />
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

export default ConferenceSlide;
