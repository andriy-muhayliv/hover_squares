import React, { useEffect, useState } from "react";
import "./Grid.css";

const Item = ({ index, gridScale, setSquaresPosition, squaresPosition }) => {
  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (!squaresPosition.length) {
      setHover(false);
    }
  });

  return (
    <div
      className="grid-item"
      onMouseEnter={() => (
        setHover(!hover),
        setSquaresPosition((prev) => [
          ...prev,
          {
            row: Math.ceil((index + 1) / gridScale),
            col:
              index + 1 - (Math.ceil((index + 1) / gridScale) - 1) * gridScale,
          },
        ])
      )}
    >
      <div className="flip-box">
        <div
          className="flip-box-inner"
          style={{ transform: hover ? "rotateX(180deg)" : "rotateX(0deg)" }}
        >
          <div className="flip-box-front"></div>
          <div className="flip-box-back"></div>
        </div>
      </div>
    </div>
  );
};

const Grid = ({ gridScale, setSquaresPosition, squaresPosition }) => {
  const generateItems = () => {
    let arr = [];

    for (let i = 0; i < gridScale * gridScale; i++) {
      arr.push(i);
    }

    return arr.map((item, index) => {
      return (
        <Item
          key={index}
          index={index}
          arrLength={arr.length}
          gridScale={gridScale}
          setSquaresPosition={setSquaresPosition}
          squaresPosition={squaresPosition}
        />
      );
    });
  };

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${gridScale}, 40px)`,
        gridTemplateRows: `repeat(${gridScale}, 40px)`,
      }}
    >
      {generateItems()}
    </div>
  );
};

export default Grid;
