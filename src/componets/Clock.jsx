import React, { useState, useEffect } from "react";
import Color from "./Color";
import "./clock.css";

const Clock = () => {
  const [selectedColor, setSelectedColor] = useState("green");
  const [currentTime, setCurrentTime] = useState(new Date());


  function handleChange(event) {
      console.log(event.target)
    setSelectedColor(event.target.value);
  }


  const updateCurrentTime = () => {
    setCurrentTime(new Date());
  };


  useEffect(() => {
    const intervalId = setInterval(updateCurrentTime, 1000);


    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>
        <div className="container">
          Pick a color: {" "}
          <select name="" id="" onChange={handleChange} value={selectedColor}>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
          </select>
          <Color
          
          newDate={currentTime.toLocaleTimeString()}
          selectedColor={selectedColor}></Color>
        </div>
      </p>
    </div>
  );
};

export default Clock;