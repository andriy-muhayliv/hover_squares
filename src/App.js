import "./App.css";
import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import Grid from "./components/Grid/Grid";

function App() {
  const [data, setData] = useState(false);
  const [scaleMode, setScaleMode] = useState(0);
  const [squaresPosition, setSquaresPosition] = useState([]);

  useEffect(() => {
    fetch("https://demo7919674.mockable.io")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // console.log(data);
  // console.log(squaresPosition);

  return (
    <div className="App">
      {data ? (
        <Dropdown
          mode={data}
          setScaleMode={setScaleMode}
          setSquaresPosition={setSquaresPosition}
        />
      ) : (
        <p>loading</p>
      )}
      <div className="flex">
        <Grid
          gridScale={scaleMode}
          setSquaresPosition={setSquaresPosition}
          squaresPosition={squaresPosition}
        />
        <div>
          <h2>Hover squares</h2>

          <div className="hover-list">
            <div>
              {squaresPosition.map((item, index) => {
                return (
                  <div className="hover-list-item">
                    <p>
                      Row: {item.row} Col: {item.col}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
