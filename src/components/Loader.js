import React from "react";
import gif from "./images/loading.gif";

const Loader = () => {
  return (
    <div style={{ width: "300px", margin: " 2rem auto" }}>
      <img src={gif} alt="loader-gif" />
    </div>
  );
};

export default Loader;
