import React from 'react';

import './Home.scss';

function Home(props) {

    return (
        <div className="container">
            <div className="home-bubble">

                <div className="home-header">
                    <h1>~ Zachary Pierce ~</h1>
                </div>

                <p>
                    I am a <span className="highlight"> Software Engineer</span>
                </p>

                <p>
                    This website has been created using
                    <span className="highlight"> ReactJS </span>
                    and
                    <span className="highlight"> SCSS</span>.
                </p>

                <p>
                    Using
                    <span className="highlight"> functional components </span>
                    and
                    <span className="highlight"> React hooks </span>
                     I was able to create a responsive personal webpage to showcase my skills as a Software Engineer.
                </p>

                <p>
                    Part of this website includes a list of projects that I have completed on my own time.
                    They each will show off different skills that I have gained over the course of my career.
                </p>

                <p>
                    My hope would be that you would have fun playing with these projects while also gaining an understanding that I am a capable engineer.
                </p>
            </div>
            <div className="home-intro">
            </div>
        </div>
    )
}

export default Home