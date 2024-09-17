import "./info.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import React from "react";

export default function Info(){
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <section className="section contact center" id="contact">
      <div className="footerCont">
        <div className="topRow">
          <a href="#" onClick={handleClick}>
            <ArrowUpwardIcon
              fontSize="larger"
              className="upButton"
              sx={{
                animation: clicked ? "spin 0.8s linear" : "",
                "@keyframes spin": {
                  "0%": {
                    transform: "rotate(360deg)",
                  },
                  "100%": {
                    transform: "rotate(0deg)",
                  },
                },
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};


