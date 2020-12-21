import React from "react";
import Buttons from "../Reusable.Components/button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const Landing = () => {
  return (
    <div className="landingContainer">
      <div className="landingHeadContainer">
        <h3>I Learn Online</h3>
        <p>E-learning portal for database and data warehousing technologies</p>
        <Buttons
          variant="contained"
          color="primary"
          size="medium"
          className="buttonStyles"
        >
          <div className="buttonStyles">
            Get Started
            <ArrowRightAltIcon />
          </div>
        </Buttons>
      </div>
      <div className="firstDivContainer">
        <h3>Why 'I Learn Online'?</h3>
        <p>
          ‘I Learn Online’ is an online database and data warehousing training
          website designed for corporate employees, individuals and job seekers.
          All the training sessions are based on scenarios as it is a proven
          methodology.{" "}
        </p>
        <p>
          While the assignments make the training more interactive, quizzes help
          to fine tune your knowledge.
        </p>
      </div>
      <div className="secondDivContainer">
        <h3>Need for online education</h3>
        <p>
          As an individual or a company its very important to access the
          information online now a days to make you more productive. E-learning
          makes it more efficient to learn only the things you needed rather
          than sitting in the class and listen to what you already known.
        </p>
        <p>
          What we teach in the class room session,we capture the same using
          Audio and video. Any questions you have in the material or examples
          what we provide, you can send us an email or call us to get the
          questions clarified
        </p>
      </div>
      <div className="thirdDivCardContainer">
        <h3>New User?</h3>
        <p>
          To access the sample topics in every course we teach, you have to
          create an account. Once you like what you see, then you pay the
          charges online to access the respective course.
        </p>
      </div>
      <div className="fourthDivCardContainer">
        <h3>Testimonials</h3>
        <p>
          "The methodological approach is fantastic backed with a robust tools
          combination. I would recommend Aroha Technologies to anyone. It’s
          quite useful in getting a job. Aroha has proved to be of tremendous
          contribution in my current M.Sc programme in Management Information
          Systems at Coventry University."
        </p>
        <p>Yemi Jide</p>
      </div>
      <div className="fifthDivCardContainer">
        <div>
          <h3>Scenario-based learning.</h3>
          <p>Content created to learn, Scenarios made to understand.</p>
        </div>
        <div>
          <Buttons variant="contained" color="primary" size="medium" className="buttonStyles">
            Read More
          </Buttons>
        </div>
      </div>
    </div>
  );
};

export default Landing;
