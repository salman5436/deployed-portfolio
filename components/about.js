import { Button } from "@material-ui/core";

export default function About () {
    return (
        <div className="about">
            <div className="profile-pic">
                <img src="slack-profile-pic.jpg" />
            </div>
            <div className="about-details">
                <div className="about-me">
                    <h1>About Me:</h1>
                    <p> 
                        I recently graduated from Texas A&M University and worked in business management before making the transition to software engineering.
                        Having recently completed the General Assembly Software Engineering Immersive, I gained hands-on project experience with various tools and technologies.  In my free time,
                        you can find me singing covers, writing poetry or stories, playing cooperative videogames, trying food from different cultures, and travelling!  I love connecting with people
                        and I encourage you to reach out and get to know me!
                    </p>
                </div>
                <div className="contact">
                    <div className="details">
                        <h1>Contact:</h1>
                        <p>
                            <span className="name">Salman Malik</span> <br />
                            <span className="email">salman5436@gmail.com</span> <br />
                            <span className="location">Houston, TX</span> <br />
                        </p>
                    </div>
                    <div className="resume">
                        <Button href="/resume.pdf" target='_blank'> My Resume! </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}