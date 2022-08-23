import React, { useContext } from "react";
import "../Experience/Experience.css";
import { themeContext } from "../../Context";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id = 'Experience'>
      <div className="achievement">
        <div className="circle">1+</div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">10+</div>
        <span>completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">5+</div>
        <span>companies</span>
        <span>work</span>
      </div>
    </div>
  );
};

export default Experience;
