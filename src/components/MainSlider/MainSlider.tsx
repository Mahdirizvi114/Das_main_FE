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
    return (
        <div className={styles.sliderWrapper}>
            {/* Render all sections vertically */}
            <div className={styles.sectionContainer}>
                <IntroSlide />
            </div>
            <div className={styles.sectionContainer}>
                <ConferenceSlide />
            </div>
            <div className={styles.sectionContainer}>
                <AccommodationSlide />
            </div>
            <div className={styles.sectionContainer}>
                <GastronomySlide />
            </div>
            <div className={styles.sectionContainer}>
                <CuratedMomentsSlide />
            </div>
            <div className={styles.sectionContainer}>
                <HostSlide />
            </div>

            {/* Transparent Spacer to reveal background video at the bottom */}
            <div className={styles.videoRevealSpacer}></div>
        </div>
    );
};

export default MainSlider;
