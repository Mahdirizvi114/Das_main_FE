
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.videoContainer}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.waveVideo}
                >
                    {/* Using the file directly from public folder */}
                    <source src="/images/Floating_Waves2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        </section>
    );
};

export default Hero;
