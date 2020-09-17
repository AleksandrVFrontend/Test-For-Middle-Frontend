import React from "react";

const Button = (props) => {
  return (
    <div className="btn">
        <button>{props.text}</button>
    </div>
  );
};

export default Button;