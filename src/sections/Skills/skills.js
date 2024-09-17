import React from "react";

import "./skills.css";

const skills = [
  {name: 'Python', 'id': 0 },
  {name: 'React', 'id': 1 },
  {name: 'AWS (Cloud Practitioner)', 'id': 2 },
  {name: 'SQL', 'id': 3 },
  {name: 'HTML', 'id': 4 },
  {name: 'CSS', 'id': 5 },
  {name: 'Flutter', 'id': 6 },
  {name: 'Streamlit', 'id': 7 },
  {name: 'Streamlit', 'id': 8 },
  {name: 'C', 'id': 0 },
  {name: 'Tailwind', 'id': 1 },
  {name: 'Git', 'id': 2 },
  {name: 'Postgres', 'id': 3 },
  {name: 'Node.js', 'id': 4 },
  {name: 'Pytorch', 'id': 5 },
  {name: 'Scikit-Learn', 'id': 6 },
  {name: 'Pandas', 'id': 7 },
]

function Skills() {
  return (
    <div id="skills">
      <h3 className="smallheader">SKILLS</h3>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={skill.id} className='skills__list-item btn btn--plain'>
            {skill.name}
          </li>
        ))}
      </ul>
      </div>
  );
}

export default Skills;
