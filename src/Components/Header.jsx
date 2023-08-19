import React from "react";
import bgimg from "../assets/images/slider1.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="img">
        <img src={bgimg} alt="img"></img>
      </div>
    </div>
  );
};

export default Header;
