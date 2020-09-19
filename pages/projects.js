import Navbar from '../components/navbar'
import Head from 'next/head'

export default function Projects() {
    return (
        <div>
            <Head>
                <title>My Projects</title>
            </Head>
            <Navbar />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Check out my work!
                </h1>

                <div className="projects">
                    <a href="" className={styles.card}>
                        <h3>Lunar Tribune - Hackathon Winning Project! &rarr;</h3>
                        <p> When tasked with making a project within 24 hours that fulfilled the theme of "wonder" in the latest Hackathon at General Assembly, my team of developers and UX designers set out to build a deep, whimsical, and detailed satirical news hub.</p>
                        <img src="/LunarTribune.png" height="400" width="600" alt="marvel pick em website screenshot that I created using Node, Express, SQl, Javascript, and CSS" />
                        <p>Technologies used: React, Bootstrap, FIGMA</p>
                    </a>
                </div>
                <div className="projects">
                    <a href="https://happy-hypatia-639c22.netlify.app/" className={styles.card}>
                        <h3>DevSpot &rarr;</h3>
                        <p>An intuitive collaborative platform that allows developers to grow together through hands-on project experience</p>
                        <img src="/devspot-login.png" height="400" width="600" alt="marvel pick em website screenshot that I created using Node, Express, SQl, Javascript, and CSS" />
                        <img src="/P3-Image.png" height="400" width="600" alt="marvel pick em website screenshot that I created using Node, Express, SQl, Javascript, and CSS" />
                        <p>Technologies used: MERN (MongoDB, ExpressJS, React, & NodeJS)</p>
                    </a>
                </div>
                <div className={styles.grid}>
                    <a href="https://marvelpickem.herokuapp.com/" className={styles.card}>
                        <h3>Marvel Pick Em' &rarr;</h3>
                        <p>Full-stack web app that implements the Marvel API with JavaScript & SQL to allow users to assemble their very own team of Avengers and create battles with multiple villains!</p>
                        <img src="/Marvel1.png" height="400" width="600" alt="marvel pick em website screenshot that I created using Node, Express, SQl, Javascript, and CSS" />
                        <img src="/Marvel2.png" height="400" width="600" alt="marvel pick em website screenshot that I created using Node, Express, SQl, Javascript, and CSS" />
                        <p>Technologies used: Javascript, SQL, Sequelize, Express, NodeJS</p>
                    </a>
                </div>
                <div className={styles.grid}>
                    <a href="https://github.com/salman5436/Memory-Matching-Bonanza" className={styles.card}>
                        <h3>The Memory Matching Bonanza &rarr;</h3>
                        <p>This was my project in General Assembly that implmented Node, Express, Javascript, SQL, CSS. and more! </p>
                        <img src="/Memory1.png" height="400" width="600" alt="Memory Matching card game screenshot that I created using Javascript, CSS, HTML, and more" />
                        <img src="/Memory2.png" height="400" width="600" alt="Memory Matching card game screenshot that I created using Javascript, CSS, HTML, and more" />
                        <p>Technologies used: HTML, CSS, Javascript</p>
                    </a>
                </div>
            </main>  

            <div className="tolinks">
              <h1>Connect with me!</h1>
              <ul>
                <a href="https://github.com/salman5436" target='_blank'><li class="fa fa-github grow"></li></a>
                <a href="https://www.linkedin.com/in/salman-malik-3ba849bb" target='_blank'> <li class="fa fa-linkedin grow"></li> </a>
              </ul>
            </div>
        </div>
    )
}