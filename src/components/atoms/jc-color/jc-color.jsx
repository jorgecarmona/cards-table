import React from "react";
import "./jc-color.css";

function JCColor({color = "orange"}) {
  const styles = {
    background: color
  };

  return <div data-testid="jc-color" className="color-block" style={styles}></div>;
}

export default JCColor;
