import React from "react";
import "./jc-color.css";

function JCColor({color = "orange"}) {
  const styles = {
    height: "144px",
    background: color
  };

  return <div style={styles}></div>;
}

export default JCColor;
