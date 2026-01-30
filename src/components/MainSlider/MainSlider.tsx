'use client';
import { useState } from 'react';
import styles from './MainSlider.module.css';
import IntroSlide from '@/components/MainSlider/IntroSlide';
import ConferenceSlide from '@/components/MainSlider/ConferenceSlide';
import AccommodationSlide from '@/components/MainSlider/AccommodationSlide';
import GastronomySlide from '@/components/MainSlider/GastronomySlide';
import CuratedMomentsSlide from '@/components/MainSlider/CuratedMomentsSlide';
import HostSlide from '@/components/MainSlider/HostSlide';

const MainSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        <IntroSlide key="intro" />,
        <ConferenceSlide key="conference" />,
        <AccommodationSlide key="accommodation" />,
        <GastronomySlide key="gastronomy" />,
        <CuratedMomentsSlide key="moments" />,
        <HostSlide key="host" />
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className={styles.sliderWrapper}>
            {/* Global Navigation Arrows */}
            <button className={`${styles.navArrow} ${styles.prev}`} onClick={prevSlide}>&lt;</button>
            <button className={`${styles.navArrow} ${styles.next}`} onClick={nextSlide}>&gt;</button>

            {/* Render the current slide component */}
            <div className={styles.slideContainer}>
                {slides[currentSlide]}
            </div>
        </div>
    );
};

export default MainSlider;
