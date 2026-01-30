'use client';
import { useRef, useEffect } from 'react';
import styles from './HeroSVG.module.css';
// We will use inline styles for the filter to keep it self-contained or add strict SVG styles

const HeroSVG = () => {
    // We can use a ref to manipulate the SVG filter for smoother animation if needed
    // But SMIL <animate> inside SVG is widely supported for this specific use case now.

    return (
        <section className={styles.hero}>
            <div className={styles.videoContainer} style={{ background: '#f5f5f5' }}>
                {/* 
                   The SVG acts as both the image display AND the filter definition.
                   We embed the image inside the SVG to apply the filter directly to it.
                */}
                <svg className={styles.svgWave} viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <filter id="water-flow">
                            {/* 
                                fractalNoise creates a smooth cloud-like pattern.
                                baseFrequency determines the 'zoom' of the noise. 
                                We animate it to create the ripple effect.
                            */}
                            <feTurbulence
                                type="fractalNoise"
                                baseFrequency="0.005 0.02"
                                numOctaves="3"
                                seed="1"
                                result="noise"
                            >
                                {/* Animate the turbulence flow slightly for organic shifting */}
                                <animate
                                    attributeName="baseFrequency"
                                    dur="30s"
                                    values="0.005 0.02; 0.005 0.04; 0.005 0.02"
                                    repeatCount="indefinite"
                                />
                            </feTurbulence>

                            {/* 
                                displacementMap uses the noise color to shift pixels of the source image.
                                scale determines how strong the distortion is.
                            */}
                            <feDisplacementMap
                                in="SourceGraphic"
                                in2="noise"
                                scale="30"
                            />
                        </filter>
                    </defs>

                    {/* The Image being distorted */}
                    <image
                        href="/images/wave-texture.png"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        style={{ filter: 'url(#water-flow)' }}
                    />
                </svg>
            </div>


        </section>
    );
};

export default HeroSVG;
