import React from "react";

const Light = (props) => {
  console.log("Light Rendering!!!!");
  const onOffClassName = props.isOn ? "on" : "off";
  const opacity = props.isOn
    ? props.brightness / 100
    : 1.0;

  return (
    <div className={`light ${onOffClassName}`}
      style={{opacity: opacity }}
    ></div>
  )
};

export default Light;