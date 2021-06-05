import styles from '../../styles/Navbar.module.css';
import { useCart } from '../../hooks/use-cart';
import Link from 'next/link';


const Navbar = () => {
    const { subtotal, checkout } = useCart();
    return (
        <nav className={styles.Navbar}>
            <p className={styles.navTitle}>
                <Link href="/">
                    <a> Harvard Cleaners </a>
                </Link>
            </p>
            <p className={styles.navCart}>
                <Link href="onClick={checkout}">
                    <a>🛒 ${parseFloat(subtotal).toFixed(2)} </a>
                </Link>
            </p>
        </nav>
    )
}

export default Navbar;

