import React from "react";
import HistoryCell from "./HistoryCell";
import "./History.css";

function History() {
  return (
    <div id="experiences" className="timelineContainer">
      <div className="c2">
        <h2 className="capHeader">Experiences</h2>
        <HistoryCell
          year="June 2023 - Aug 2023"
          title="Lastwall Networks"
          duration="New Brunswick, Canada"
          details="Travelled to the office in New Brunsick, Canada and took part in the software development team. Here I collaborated in an Agile development process with cross-functional team sprints and daily scrums. Additionally, in my time there, I improved the accuracy of software by 60% by testing the code and analyzing
          the datasets."
        />
        <HistoryCell
          year="Aug 2022 - Present"
          title="Carnegie Mellon University"
          duration="Pittsburgh, PA"
          details="Currently pursuing a BS in Information Systems + Minor in AI. Some relevant coursework I have taken includes: Data Structures, Intro to Machine Learning, Intro to Deep Learning, Natural Language Processing, Database Design, Matrices and Linear Transformations, Concepts of Mathematics,  and Probability Theory. Some clubs I am a part of include Data Science Club and Asian Student Association."
        />
        <HistoryCell
          year="Aug 2018 - June 2022"
          title="Chapel Hill High"
          duration="Chapel Hill, NC"
          details="My Coding Journey began here where I was first introduced to Java by my AP Computer Science teacher. During my time here, I mainly worked on Mobile App development (Swift and Flutter) also started participating in app competitions."
        />
      </div>
    </div>
  );
}

export default History;
