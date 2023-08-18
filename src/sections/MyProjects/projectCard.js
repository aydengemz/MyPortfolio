import "./projectCard.css";
import React from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function ProjectCard({ project, content, skills, links, image }) {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const skillItems = skills?.map((s) => (
    <li key={s.id} className="skillitem">
      {s.content}
    </li>
  ));
  const linkItems = links?.map((l) => (
    <a href={l.link} className="link projIcon" key={l.id} target="_blank">
      <l.icon sx={{fontSize: {s: "1.4em", m:"1.8rem"}}} />
    </a>
  ));
  const control = useAnimation();
  const [ref, inView] = useInView();
  const imageSlideVariant = {
    visible: { opacity: 1, scale: 1},
    hidden: { opacity: 0, scale: 1},
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="projectCont"
      ref={ref}
      variants={imageSlideVariant}
      initial="hidden"
      animate={control}
      transition={{ duration: 0.2}}
      exit={control}
    >
      <div className="projLeft">
        <div className="projLeftContent">
          <h3>{project}</h3>
          <p className="projectText">{content}</p>
          <ul className="skillCont">{skillItems}</ul>
          <div className="linkCont">{linkItems}</div>
        </div>
      </div>

      <div className="projRight">
        <div className="projRightContent">
          <img src={image}/>
        </div>
      </div>
    </motion.div>
  );
}
