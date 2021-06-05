import styles from '../styles/Navbar.module.css';
import { useCart } from '../hooks/use-cart.js';

const Navbar = () => {
    const { subtotal, checkout } = useCart();
    return (
        <nav className={styles.Navbar}>
            <p className={styles.navTitle}>
                <Link href="/">
                    <a>Harvard Cleaners 🧼</a>
                </Link>
            </p>
            <p className={styles.navCart}>
                <Link onClick={checkout}>
                    <a>🛒 ${subtotal.toFixed(2)} </a>
                </Link>
            </p>
        </nav>
    )
}

export default Navbar;

