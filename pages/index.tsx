import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reuben Gardos Reid</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <img src="/mpls.svg" className={styles.banner}></img>
        <h1 className={styles.title}>
          Reuben Gardos Reid
        </h1>
        <h3>
          <a className={styles.linkedin} href="https://www.linkedin.com/in/reuben-gardos-reid/">LinkedIn</a>
        </h3>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
