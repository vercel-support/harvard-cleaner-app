// Package Imports 
import Head from 'next/head'
import Link from 'next/link'
/*import Image from 'next/image'*/
import styles from '../styles/Home.module.css'
import { useCart } from '../hooks/use-cart.js';
import products from '../products.json';
import { Navbar } from '../components/Nav/Navbar'


export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>Harvard Cleaners</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Harvard Cleaners 🧼 !
        </h1>

        <p className={styles.description}>
          Let's get you all cleaned up with environmentally-friendly cleaning services
        </p>

        <ul className={styles.grid} >
          {products.map(product => {
            const { id, title, image, description, price } = product;
            return (
              <li key={id} className={styles.card}>
                <Link href={`/products/${id}`}>
                  <a>
                    <img src={image} alt="{title}"></img>
                    <h3> {title} </h3>
                    <p>Starts at ${price}</p>
                    <p> {description}</p>
                  </a>
                </Link>
                <p>
                  <button className={styles.button} onClick={() => {
                    addToCart({
                      id
                    })

                  }}>Add To Cart</button>
                </p>
              </li>
            )
          })}
        </ul>
      </main>


      <footer className={styles.footer}>
        <a
          href="https://thescoopllc.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {' '}
          <span className={styles.logo}>
            <img src="/ScoopLogo.svg" alt="The Scoop LLC" /*width={54} height={35}*/ />
          </span>
        </a>
      </footer>
    </div>
  )
}