// Header.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/Header.css";
import Icon from "./Icon";
import SearchIcon from "@mui/icons-material/Search";
import AppleIcon from "@mui/icons-material/Apple";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`header ${scrolled ? "dark" : ""}`}>
      <nav style={{ display: "flex", width: "100%", flex: "1 1 1 1" }}>
        <Link style={{ paddingBottom: "0", marginLeft: "-1%" }} to="/">
          <img
            style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5MH6JwyxWPJjU1CEp62-Fz6QBGG2F_bMzg&usqp=CAU"
            alt=""
          />
        </Link>
        <div style={{ marginTop: "1.3%", marginLeft: "0%" }}>
          <Link to="/swap">Swap</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/nfts">NFTs</Link>
          <Link to="/pool">Pool</Link>
        </div>
        <div
          style={{
            maxWidth: "40%",
            height: "40px",
            display: "flex",
            flex: "1 1",
            alignSelf: "center",
            alignItems: "flex-start",
            backdropFilter: "blur(60px)",
            WebkitTapHighlightColor: "transparent",
            backgroundColor: "#131313",
            borderRadius: "16px",
            margin: "0.75% 5%",
          }}
        >
          <div style={{ marginTop: "1.5%", marginLeft: "1%" }}>
            <SearchIcon />
          </div>
          <input
            style={{
              backgroundColor: "#131313",
              outline: "none",
              marginTop: "2%",
              border: "0",
              padding: "0",
              width: "88%",
              marginLeft: "2%",
            }}
            type="text"
            placeholder="Search tokens and NFT collections"
          />
          <div
            style={{
              marginTop: "1.5%",
              backgroundColor: "rgba(255, 255, 255, 0.07)",
              padding: "3px 6px",
            }}
          >
            /
          </div>
        </div>
        <div style={{ paddingTop: "0.75%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              gap: "10px",
            }}
          >
            <Icon />
            <button
              style={{
                backgroundColor: "rgb(19, 19, 19)",
                borderRadius: "20px",
                display: "flex",
              }}
            >
              <span
                style={{ marginTop: "7%", fontWeight: "600", fontSize: "16px" }}
              >
                Get the app
              </span>
              <div style={{ marginTop: "3%" }}>
                <AppleIcon style={{ padding: "1% 5px" }} />
                <SportsEsportsIcon style={{ padding: "1% 0px" }} />
              </div>
            </button>
            <button
              style={{
                backgroundColor: "rgb(49, 28, 49)",
                color: "rgb(252, 114, 255)",
                borderRadius: "20px",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Connect
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
