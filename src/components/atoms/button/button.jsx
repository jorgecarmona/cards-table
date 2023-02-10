import React from "react";

import "./button.css";

function JCButton({color = "orange", size = "lg", text = "", handleClick = () => {}}) {
  let classes = `jc-button-lg`;

  if (size === "sm") {
    classes = "jc-button-sm";
  }

  if (size === "md") {
    classes = "jc-button-md";
  }

  return (
    <button onClick={handleClick} className={`jc-button ${classes}`} style={{background: `${color}`}}>
      {text}
    </button>
  );
}

export default JCButton;
