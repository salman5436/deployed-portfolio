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


        {/* <h1 className={styles.title}>
          Hello, I'm Salman
        </h1>

        <p className={styles.description}>
          I'm a 2nd generation full stack developer from Texas with a love for creating, collaborating, and learning!
          I'm excited to share my passion with you!
        </p>

        <p className={styles.description}>You can find me and my work on:</p>

        <div className={styles.grid}>
          <a href="https://www.linkedin.com/in/salman-malik-3ba849bb" target='_blank' className={styles.card}>
            <h3>Linkedin &rarr;</h3>
            <p>Connect with me on LinkedIn! Let's start a conversation!</p>
          </a>

          <a href="https://github.com/salman5436" target='_blank' className={styles.card}>
            <h3>Github &rarr;</h3>
            <p>Check out my Github to see my projects & interests!</p>
          </a>

          <a
            href='/resume.pdf' target='_blank'
            className={styles.card}
          >
            <h3>Resume &rarr;</h3>
            <p>Click here to view my resume with my professional experience! </p>
          </a>

          <a
            href='https://medium.com' target='_blank'
            className={styles.card}
          >
            <h3>Blog &rarr;</h3>
            <p> Check out my blog! I write about music, coding, gaming & more. </p>
          </a>
         
        </div> */}
        </main>

        <footer className={styles.footer}>
          <h4>Salman Malik - 2020</h4>
        
        </footer>
      </div>
    </div>
  )
}
