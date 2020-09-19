import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function Header () {
    return (
        
        <div className="header"> 
            <div className="header__banner">
                <div className="banner-text">
                    <div className="intro">
                        <h1>Salman Malik</h1>
                        <p>A growth-oriented learner, I am a second-generation software engineer with a passion for creative problem-solving through collaboration and dedication.</p>    
                    </div>
                    <hr />
                    <div className="header-icons">
                            <IconButton href="https://www.linkedin.com/in/salman-malik-3ba849bb/"> 
                                <LinkedInIcon /> 
                            </IconButton>            
                            <IconButton href="https://github.com/salman5436"> 
                                <GitHubIcon /> 
                            </IconButton>            
                            <IconButton href="https://www.facebook.com/joshua.danao.7">  
                                <FacebookIcon /> 
                            </IconButton>
                    </div>
                </div>
            </div>
        </div>
        
    )
} 
