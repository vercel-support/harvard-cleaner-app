import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import products from '../products.json';

import { initiateCheckout } from '../lib/payments.js';

export default function Home() {
  console.log('NEXT_PUBLIC_STRIPE_API_KEY', process.env.NEXT_PUBLIC_STRIPE_API_KEY)
  return (
    <div className={styles.container}>
      <Head>
        <title>Harvard Cleaners</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Harvard Cleaners 🧼 !
        </h1>

        <p className={styles.description}>
          Let's get you all cleaned up with environmentally-friendly cleaning services
        </p>

        <ul className={styles.grid} >
          {products.map(product => {
            const { id, title, price, description, image } = product;
            return (
              <li key={id} className={styles.card}>
                <a href="#" >
                  <img src={image} alt="{title}"></img>
                  <h3> {title} </h3>
                  <p>Starts at ${price}</p>
                  <p> {description}</p>
                </a>
                <p>
                  <button className={styles.button} onClick={() => {
                    initiateCheckout({
                      lineItems: [
                        {
                          price: id,
                          quantity: 1
                        }
                      ]
                    });
                  }}>Buy This!</button>
                </p>
              </li>
            )
          }
          )
          }
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
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
