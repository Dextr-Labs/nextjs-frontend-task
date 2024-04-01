import React, { useEffect, useState } from "react";
import "./style/Home.css";
import Home_Components from "./Home/Home_Components";
import Bottom from "./Home/Bottom";

const cryptoImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4nccEDQhzhXq3Oz9SsvlWoQyvpg31K_wcoA&usqp=CAU";

const SecondLayer = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const generatePositions = () => {
      const numImages = 4; // Number of images
      const newPositions = [];

      for (let i = 0; i < numImages; i++) {
        const position = {
          top: `${Math.random() * 80}%`, // Random top position (within 80% of the screen)
          left: `${Math.random() * 80}%`, // Random left position (within 80% of the screen)
        };
        newPositions.push(position);
      }

      setPositions(newPositions);
    };

    generatePositions();
  }, []);

  return (
    <div className="second-layer">
      {/* Dynamically position images */}
      {positions.map((position, index) => (
        <img
          key={index}
          className="icon"
          src={cryptoImg}
          alt=""
          style={{ top: position.top, left: position.left }}
        />
      ))}
    </div>
  );
};

const ThirdLayer = () => {
  return (
    <div className="third-layer">
      <Home_Components />
    </div>
  );
};

const Home = () => {
  return (
    <div className="app">
      <SecondLayer/>
      <ThirdLayer />
      <Bottom />
    </div>
  );
};

export default Home;
