import Navbar from '../components/navbar'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div>
            <Head>
                <title>About Me</title>
            </Head>
            
            <Navbar />


            <div>
                <h3 className={styles.title}> About Me </h3>
                <div className="profile-pic">
                    <img src="slack-profile-pic.jpg" />
                </div>
                <div className="brand-statement">
                    <p className={styles.description}>
                    A growth-oriented learner, I am a second-generation software engineer with a passion for creative problem-solving through collaboration and dedication.
                    </p>
                </div>
                {/* <div className="personal-description">
                    <p className={styles.description}> I'm a developer, writer, and public speaker with a strong passion for music and singing!</p>
                </div> */}
                <div className="personal-summary">
                    <p className={styles.description}> I recently graduated from Texas A&M University and worked in business management before making the transition to software engineering.
                        Having recently completed the General Assembly Software Engineering Immersive, I gained hands-on project experience with various tools and technologies.  In my free time,
                        you can find me singing covers, writing poetry or stories, playing cooperative videogames, trying food from different cultures, and travelling!  I love connecting with people
                        and I encourage you to reach out and get to know me 
                    </p>
                </div>

                <h2 className="tech-stacks">Technologies That I Use:</h2>
                <div className="tech">
                        <div classname="techname">
                            <img src="html5.png" height="75" width="75" />
                            <h4>HTML5</h4>
                        </div>
                        <div classname="techname">
                            <img src="css.png" height="75" width="75" />
                            <h4>CSS</h4>
                        </div>
                        <div classname="techname">
                            <img src="javascript.png" height="75" width="75" />
                            <h4>JavaScript</h4>
                        </div>
                        <div classname="techname">
                            <img src="react.png" height="75" width="75" />
                            <h4>React</h4>
                        </div>
                        <div classname="techname">
                            <img src="sql.png" height="75" width="75" />
                            <h4>SQL</h4>
                        </div>
                        <div classname="techname">
                            <img src="nodejs.png" height="75" width="75" />
                            <h4>NodeJS</h4>
                        </div>
                        <div classname="techname">
                            <img src="python.png" height="75" width="75" />
                            <h4>Python</h4>
                        </div>
                        <div classname="techname">
                            <img src="typescript.png" height="75" width="75" />
                            <h4>TypeScript</h4>
                        </div>
                        <div classname="techname">
                            <img src="mongodb.png" height="75" width="75" />
                            <h4>MongoDB</h4>
                        </div>
                </div>
               
            </div>

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