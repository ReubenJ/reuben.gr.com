import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <img src="/mpls.svg" className={styles.banner}></img>
        <h1 className={styles.title}>
          Reuben Gardos Reid
        </h1>
        {/* <h2>Software Developer</h2> */}
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
