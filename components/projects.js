export default function Project () {
    return (
      <div className="projects__container">
          <h1 className="projects__header">Check Out My Projects:</h1>
            <div className="projects__content">
                <div className="each-project">
                    <a href="" >
                        <img src="/LunarTribune.png" alt="marvel pick em website screenshot that I created using Node, Express, SQl, Javascript, and CSS" className="img__img"/>
                        <div className="img__description">
                            <h3>Lunar Tribune - Hackathon Winning Project! &rarr;</h3>
                            <p> When tasked with making a project within 24 hours that fulfilled the theme of "wonder" in the latest Hackathon at General Assembly, my team of developers and UX designers set out to build a deep, whimsical, and detailed satirical news hub.</p>
                            <p>Technologies used: React, Bootstrap, FIGMA</p>
                        </div>
                    </a>
                </div>
                <div className="each-project">
                    <a href="https://happy-hypatia-639c22.netlify.app/" >
                        <img src="/devspot-login.png" alt="marvel pick em website screenshot that I created using Node, Express, SQl, Javascript, and CSS" className="img__img" />
                        <div className="img__description">
                            <h3>DevSpot &rarr;</h3>
                            <p>An intuitive collaborative platform that allows developers to grow together through hands-on project experience</p>
                            <p>Technologies used: MERN (MongoDB, ExpressJS, React, & NodeJS)</p>
                        </div>
                    </a>
                </div>
                <div className="each-project">
                    <a href="https://marvelpickem.herokuapp.com/" >
                        <img src="/Marvel1.png" alt="Marvel Pick Em' website screenshot that I created using Node, Express, SQl, Javascript, and CSS" className="img__img" />
                        <div className="img__description">
                            <h3>Marvel Pick Em' &rarr;</h3>
                            <p>Full-stack web app that implements the Marvel API with JavaScript & SQL to allow users to assemble their very own team of Avengers and create battles with multiple villains!</p>
                            <p>Technologies used: Javascript, SQL, Sequelize, Express, NodeJS</p>
                        </div>
                    </a>
                </div>
                <div className="each-project">
                    <a href="https://github.com/salman5436/Memory-Matching-Bonanza" >
                        <img src="/Memory1.png" alt="Memory Matching card game screenshot that I created using Javascript, CSS, HTML, and more" className="img__img"/>
                        <div className="img__description">
                            <h3>The Memory Matching Bonanza &rarr;</h3>
                            <p>This was my project in General Assembly that implmented Node, Express, Javascript, SQL, CSS. and more! </p>
                            <p>Technologies used: HTML, CSS, Javascript</p>
                        </div>
                    </a>
                </div>
            </div>
      </div>
    )
}