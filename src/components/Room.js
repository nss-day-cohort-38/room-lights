import React, { useState } from "react";
import Light from "./Light";
import "./Room.css";

const Room = () => {
  console.log("Room Rendering!!!!");

  const [lightState, setLightState] = useState({ isOn: false, brightness: 100 });

  const toggleLights = () => {
    const isOn = !lightState.isOn;
    //const newLightState = { ...lightState, isOn };
    const newLightState = { 
      brightness: lightState.brightness, 
      isOn: isOn 
    };
    setLightState(newLightState);
  }

  const adjustLightsBrightness = (evt) => {
    const brightness = evt.target.value;
    const newLightState = { ...lightState, brightness };
    setLightState(newLightState);
  }

  return (
    <div id="room">
      <div id="controls">
        <button onClick={toggleLights}>Toggle Lights</button>
        <input 
          type="range"
          min="50" max="100"
          value={lightState.brightness}
          onChange={adjustLightsBrightness}
        />
      </div>
      <div className="row">
        <Light 
          isOn={lightState.isOn}
          brightness={lightState.brightness} />
        <Light 
          isOn={lightState.isOn}
          brightness={lightState.brightness} />
        <Light 
          isOn={lightState.isOn}
          brightness={lightState.brightness} />
        <Light 
          isOn={lightState.isOn}
          brightness={lightState.brightness} />
        <Light 
          isOn={lightState.isOn}
          brightness={lightState.brightness} />
      </div>
    </div>
  )
};

export default Room;
