import Head from 'next/head'
import CallToAction from '../components/CallToAction/CallToAction'
import styles from '../styles/Home.module.css'

const frases = [
  "pra dispositivos IoT",
  "pro futuro conectado",
  "pra todas as inovações"
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IoT</title>
        <meta name="description" content="Trabalho realizado para disciplina de Sistemas Operacionais" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SOs <span className={styles.span}>IoT</span>
        </h1>

        <CallToAction frases={frases}></CallToAction>

        <div className={styles.grid}>
          <a href="/documentation" target="_blank" className={styles.card}>
            <h2>Documentação &rarr;</h2>
            <p>Entenda sobre o que é IoT e como funcionam os SOs para esse tipo de dispositivo</p>
          </a>

          <a href="/systems" target="_blank" className={styles.card}>
            <h2>Conheça &rarr;</h2>
            <p>Descubra quais os principais e mais novos SOs utilizados para dispositivos IoT</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>Produzido por</span>
        <span className={styles.logo}>
          ERA
        </span>
      </footer>
    </div>
  )
}
