import React from "react";
import "./button.css";
// .btn-danger, .btn-warning,.btn-success,.btn-primary,.btn-light
const Button = (props) => {
  const shape = props.shape ? "btn-" + props.shape : "round-1";
  const type = props.type ? "btn-" + props.type : "success";
  return(
    <button
        className={`btn ${type} ${shape}`}
        onClick={props.onClick ? () => props.onClick() : null}
    >
        {props.children}
    </button>
  )
};
export default Button;
