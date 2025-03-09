import Link from 'next/link';
import styles from '../styles/navbar.module.css'; // Adjust based on file structure

export default function Navbar() {
    return (
        <div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
            <Link href="/" passHref></Link>
            <nav className={styles.nav} aria-label="Main Navigation"></nav>
        </div>
    );
}