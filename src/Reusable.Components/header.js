import React from "react";
import Buttons from "./button";

const Appbar = () => {
  return (
    <div className="appHeaderContainer">
      <header className="headerContainer">
        <div className="headerContentContainer">
          <h4 className="headerContent">Home</h4>
          <h4 className="headerContent">Courses</h4>
          <h4 className="headerContent">Contact Us</h4>
          <div className="headerButtonsContainer">
          <Buttons
            variant="contained"
            color="primary"
            size="medium"
            className="buttonStyles"
          >
          Login
          </Buttons>
        </div>
        </div>
      </header>
    </div>
  );
};

export default Appbar;
