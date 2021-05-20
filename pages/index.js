import Head from 'next/head'
import styles from '../styles/Home.module.css'

import products from '../products.json';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Harvard Cleaners</title>
        <link rel="icon" href="/public/favicon.ico" />
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
                  <p>Starts at $ {price}</p>
                  <p> {description}</p>
                </a>
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
            <img src="/public/ScoopLogo.svg" alt="The Scoop LLC" width={72} height={35} />
          </span>
        </a>
      </footer>
    </div>
  )
}
