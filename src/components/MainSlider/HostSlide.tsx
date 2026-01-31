'use client';
import styles from './HostSlide.module.css';

const HostSlide = () => {
    return (
        <div className={styles.card}>
            {/* Left Col: Image */}
            <div className={styles.imageCol}>
                <img
                    src="/images/host_bhupinder_singh.jpg"
                    alt="Bhupinder Singh - Host"
                    className={styles.featureImage}
                />
            </div>

            {/* Right Col: Content */}
            <div className={styles.contentCol}>
                <h2 className={styles.sectionTitle}>Ihr Gastgeber</h2>
                <span className={styles.subtitle}>IHR GASTGEBER</span>

                <h3 className={styles.hostName}>Bhupinder Singh</h3>
                <span className={styles.hostRole}>Inhaber</span>

                <blockquote className={styles.quote}>
                    "Gastfreundschaft ist nicht nur Service; es geht darum, ein Zuhause fernab von Zuhause zu schaffen, in dem sich jeder Gast wie ein Familienmitglied fühlt."
                </blockquote>

                <p className={styles.description}>
                    Mit einer Leidenschaft für Exzellenz und einem Herz für Service hat sich Bhupinder Singh dazu verschrieben, Das ELB zu einem Ort des Komforts und des kulinarischen Genusses zu machen.
                    Seine Vision verbindet die Herzlichkeit traditioneller Gastfreundschaft mit modernem Luxus und sorgt dafür, dass jeder Moment Ihres Aufenthalts perfekt gestaltet ist.
                    Ob Sie geschäftlich, für eine Feier oder einen ruhigen Kurzurlaub hier sind, er und sein Team widmen sich ganz Ihrem unvergesslichen Erlebnis.
                </p>

                <div className={styles.signature}>Bhupinder Singh</div>
            </div>
        </div>
    );
};

export default HostSlide;
