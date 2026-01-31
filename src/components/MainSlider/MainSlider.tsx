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

    // Swipe Handler Logic
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null); // Reset
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();
    };

    return (
        <div
            className={styles.sliderWrapper}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
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
