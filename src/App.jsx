import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Swap from "./components/Swap";
import Explore from "./components/Explore";
import NFTs from "./components/NFTs";
import Pool from "./components/Pool";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="swap" Component={Swap} />
          <Route path="/explore" Component={Explore} />
          <Route path="/nfts" Component={NFTs} />
          <Route path="/pool" Component={Pool} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
