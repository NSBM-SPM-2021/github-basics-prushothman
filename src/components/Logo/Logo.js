import React from "react";
import classes from "./Logo.css";
import burgerLogo from "../../assets/images/bur.jpg";
const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="burger" />
    </div>
  );
};

export default Logo;
