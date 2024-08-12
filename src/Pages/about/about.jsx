// This code imports what's needed for the site and fuctions to work
import React from "react";
import "../../styles.css";

const About = () => {
  {
    /* This is the code for the base of the site */
  }
  return (
    <div className="main-rectangle-div">
      ;
      <div className="background">
        <main>
          <div className="blank-box"></div>
          {/* This begins the text on the site */}
          <div className="big-about">
            <h2>So, you want to learn more?</h2>
          </div>
          <div className="blank-box"></div>
          <div className="about-welcome">
            <h3>Here's some info about me!</h3>
          </div>
          <div className="blank-box"></div>
          <div className="blank-box"></div>
        </main>
        <div className="main-about">
          {/* Here's the code for the columns of skills */}
          <div>
            <div className="column">
              <h3>Great Artist</h3>
              <p>
                As you can tell from the background of the site, I have great
                skills in art!
              </p>
            </div>
            <div className="blank-box"></div>
            <div className="column">
              <h3>Negotiator</h3>
              <p>
                Along with being a great artist, I also have an eye for
                business! I give fair prices for my art, but still make sure
                your satisfaction is guaranteed!
              </p>
            </div>
            <div className="blank-box"></div>
            <div className="column">
              <h3>Hiring</h3>
              <p>
                If you want to hire my services to make an art piece for you,
                contact me at NatureCreator@hotmail.com
              </p>
            </div>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};

export default About; //this code allows it to be used in other components
