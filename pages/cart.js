import Head from 'next/head'
import styles from '../styles/Cart.module.css'
import { useCart } from '../hooks/use-cart.js';
import products from '../products.json';
import Table from '../components/Table/Table';

const columns = [
    {
        columnId: 'title',
        Header: 'Product Name'
    },
    {
        columnId: 'quantity',
        Header: 'Quantity'
    },
    {
        columnId: 'pricePerUnit',
        Header: 'Price Per Item'
    },
    {
        columnId: 'total',
        Header: 'Item Total'
    }
];

export default function Home() {

    const { cartItems, checkout, updateItem } = useCart();

    const data = cartItems.map(({ id, quantity, pricePerUnit }) => {
        const product = products.find(({ id: pid }) => pid === id);
        const { title } = product || {};

        const Quantity = () => {
            function handleOnSubmit(e) {
                e.preventDefault();

                const { currentTarget } = e;
                const inputs = Array.from(currentTarget.elements);
                const quantity = inputs.find(input => input.name === 'quantity')?.value;

                updateItem({
                    id,
                    quantity: quantity && parseInt(quantity)
                });
            }

            return (
                <form className={styles.cartQuantity} onSubmit={handleOnSubmit}>
                    <input name="quantity" type="number" min={0} defaultValue={quantity} />
                    <button className={styles.button}>Update</button>
                </form>
            )
        }

        return {
            id,
            title,
            quantity: <Quantity />,
            pricePerUnit: parseFloat(pricePerUnit).toFixed(2),
            total: parseFloat(quantity * pricePerUnit).toFixed(2)
        }
    });

    return (
        <div className={styles.container}>
            <Head>
                <title>Shopping Cart - Harvard Cleaners</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>

                <h1 className={styles.title}>
                    🛒 Cart
                </h1>

                <Table className={styles.table} data={data} columns={columns} />

                <p className={styles.checkout}>
                    <button className={styles.button} onClick={checkout}>
                        Check Out
                    </button>
                </p>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://thescoopllc.co"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by {' '}
                    <span className={styles.logo}>
                        <Image src="/ScoopLogo.svg" alt="The Scoop LLC" width={54} height={35} />
                    </span>
                </a>
            </footer>
        </div>
    )
}