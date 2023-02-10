import React from "react";
import "./loader-button.css";

function JCLoaderButton({text, onLoad}) {
  return (
    <button onClick={onLoad} className="jc-loader-button">
      {text}
    </button>
  );
}

export default JCLoaderButton;
