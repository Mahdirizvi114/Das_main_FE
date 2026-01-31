import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link href="/" className={styles.logo}>
                    <img src="/images/logo.png" alt="DAS ELB" className={styles.logoImage} />
                </Link>
                <span className={styles.subLogo}>MAGDEBURG</span>
            </div>
            <nav className={styles.nav}>
                <button className={styles.menuButton}>MENÜ</button>
            </nav>
        </header>
    );
};

export default Header;
