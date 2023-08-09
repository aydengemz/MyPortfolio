import "./projectCard.css";
import React from "react";

export default function ProjectCard({ project, content, skills, links }) {
  const skillItems = skills?.map((s) => (
    <li key={s.id} className="skillitem projSkill">
      {s.content}
    </li>
  ));
  const linkItems = links?.map((l) => (
    <div className="projLink">
      <a href={l.link} className="link iconLink" key={l.id} target="_blank">
        <l.icon/>
        <div className="bar"></div>
      </a>
    </div>
  ));

  return (
    <div className="projectCont">
      <h3>{project}</h3>
      <span>{project.description}</span>
      <ul>
        <li className="projectText">{content}</li>
      </ul>
      <ul className="skillCont">{skillItems}</ul>
      <div className="linkCont">{linkItems}</div>
    </div>
  );
}
