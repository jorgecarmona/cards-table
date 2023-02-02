import React from "react";

import "./button.css";

function JCButton({color, size = "lg", text}) {
  let classes = `jc-button-lg`;

  if (size === "sm") {
    classes = "jc-button-sm";
  }

  if (size === "md") {
    classes = "jc-button-md";
  }

  return (
    <button className={`jc-button ${classes}`} style={{background: `${color}`}}>
      {text}
    </button>
  );
}

export default JCButton;
