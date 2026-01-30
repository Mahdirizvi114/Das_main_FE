'use client';
import { useState } from 'react';
import styles from './Accommodation.module.css';

const Accommodation = () => {
    const [activeTab, setActiveTab] = useState('sanctuary');

    // Define the content for each tab
    const content = {
        sanctuary: {
            image: '/images/luxury_bathroom.png',
            title: 'Soft light, flowing water, and space to slow down.',
            price: '€129.00',
            features: [
                'Cancellable free of charge until 6 PM',
                'No credit card required',
                'No prepayment needed',
                'Without catering',
                '3 services included'
            ]
        },
        river: {
            image: '/images/luxury_bedroom.png',
            title: 'Wake up to the rhythm of the Elbe.',
            price: '€185.00',
            features: [
                'Direct river view',
                'Morning sun',
                'Breakfast included',
                'Free cancellation until 24h',
                'Welcome drink included'
            ]
        },
        island: {
            image: '/images/luxury_bedroom.png', // reusing bedroom for now as I only gen'd 2
            title: 'Your private island retreat in the city.',
            price: '€250.00',
            features: [
                'Panoramic views',
                'Private terrace',
                'All-inclusive minibar',
                'Late check-out available',
                'Spa access included'
            ]
        }
    };

    const currentContent = content[activeTab as keyof typeof content];

    return (
        <section className={styles.container}>
            <div className={styles.sliderContainer}>
                {/* Left Side: Images Slider */}
                <div className={styles.imageViewer}>
                    <img
                        src={currentContent.image}
                        alt="Accommodation Interior"
                        className={styles.slideImage}
                        key={activeTab} // Force re-render for animation if added later
                    />
                    <div className={styles.navArrows}>
                        <button className={styles.arrow}>&lt;</button>
                        <button className={styles.arrow}>&gt;</button>
                    </div>
                </div>

                {/* Right Side: Details */}
                <div className={styles.details}>
                    <div className={styles.header}>
                        <h2 className={styles.sectionTitle}>Accommodations</h2>
                        <span className={styles.subTitle}>SELECT YOUR SANCTUARY</span>
                    </div>

                    <div className={styles.tabs}>
                        <button
                            className={`${styles.tab} ${activeTab === 'sanctuary' ? styles.active : ''}`}
                            onClick={() => setActiveTab('sanctuary')}
                        >
                            THE SANCTUARY
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'river' ? styles.active : ''}`}
                            onClick={() => setActiveTab('river')}
                        >
                            RIVER VIEW
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'island' ? styles.active : ''}`}
                            onClick={() => setActiveTab('island')}
                        >
                            ISLAND SUITE
                        </button>
                    </div>

                    <h3 className={styles.roomTitle}>
                        {currentContent.title}
                    </h3>

                    <div className={styles.priceContainer}>
                        <span className={styles.rateLabel}>BEST-PREIS-RATE</span>
                        <span className={styles.price}>{currentContent.price}</span>
                        <span className={styles.priceUnit}>/ Total price</span>
                    </div>

                    <ul className={styles.features}>
                        {currentContent.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>

                    <div className={styles.footer}>
                        <span className={styles.designedBy}>DESIGNED FOR THE SENSES</span>
                        <button className={styles.ctaButton}>ENTER THE SANCTUARY</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accommodation;
