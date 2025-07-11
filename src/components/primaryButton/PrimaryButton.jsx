import React from "react";

function PrimaryButton({ text, onClick, style }) {
  return (
    <button onClick={onClick} style={style} className="home__button">
      {text}
    </button>
  );
}
export default PrimaryButton;
