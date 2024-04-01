import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import "./style/Footer.css";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: "40px",
        // paddingRight: "40px",
        position: "relative",
        alignItems: "flex-start",
        // marginTop: "170%",
        marginBottom: "10%",
      }}
    >
      <div className="footerIcon" style={{ width: "100%", height: "186px" }}>
        <div>
          <h3>© 2024</h3>
          <h3>Uniswap Labs</h3>
        </div>
        <div>
          <a href="/">
            <GitHubIcon fontSize="large" />
          </a>
          <a href="/">
            <TwitterIcon fontSize="large" />
          </a>
          <a href="/">
            <RedditIcon fontSize="large" />
          </a>
        </div>
      </div>

      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "100%" }}>
            <p>App</p>
            <p>Swap</p>
            <p>Tokens</p>
            <p>NFTs</p>
            <p>Pool</p>
          </div>
          <div style={{ width: "100%" }}>
            <p>Protocall</p>
            <p>Governonce</p>
            <p>Developers</p>
          </div>
        </div>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "100%" }}>
            <p>Company</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Brand Assets</p>
            <p>Terms & Privacy</p>
            <p>Trademark Policy</p>
          </div>
          <div style={{ width: "100%" }}>
            <p>Need Help?</p>
            <p>Contact us</p>
            <p>Help Center</p>
          </div>
        </div>
      </div>
    </div>
  );
}
