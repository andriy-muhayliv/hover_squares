import React from "react";
import { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ mode, setScaleMode, setSquaresPosition }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Pick mode");

  return (
    <div className="dropdown">
      <div
        onClick={(e) => {
          setIsActive(!isActive);
        }}
        className="dropdown-btn"
      >
        {selected}
        <span className={isActive ? "arrow" : "arrow half-rotate"} />
      </div>
      <div
        className="dropdown-content"
        style={{ display: isActive ? "block" : "none" }}
      >
        {mode.map((item, index) => {
          return (
            <div
              key={index}
              onClick={(e) => {
                setIsSelected(e.target.textContent);
                setIsActive(!isActive);
                setScaleMode(item.field);
                setSquaresPosition([]);
              }}
              className="item"
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
