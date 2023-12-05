import img from "./img/nba-logo.png";

import React from "react";

const Assets = () => {
  return (
    <div className="logo">
      <img src={img} alt="img" />
      <h1>NBA LEGENDS</h1>
    </div>
  );
};

export default Assets;
