import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'

export default function Home() {
  return (
    <div>
      <div>
        <Head>
          <title>Salman Malik: Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

      <main>
        <Header />
        <About />
        <Skills />
        <Projects /> 
      </main>

        <footer className={styles.footer}>
          <h4>Salman Malik - 2020</h4>
        </footer>
      </div>
    </div>
  )
}
