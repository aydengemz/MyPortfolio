import React from "react";
import HistoryCell from "./HistoryCell";
import "./History.css";

function History() {
  return (
    <div id="experiences" className="timelineContainer">
      <h3 className="smallheader">EXPERIENCES</h3>
      <div className="c2">
      <HistoryCell
          year="September 2024 - Present" 
          title="Software Developer Intern @ Zeed AI"
          duration="London, England"
          details="Currently Here"
          role="Software Developer Intern"
        />
      <HistoryCell
          year="June 2023 - Aug 2023" 
          title="Machine Learning Intern @ Lastwall Networks"
          duration="New Brunswick, Canada"
          details="During this internship, I implemented supervised and unsupervised deep learning models using PyTorch, scikit-learn, and NumPy on risk-based authentication (RBA) data, achieving 100% test accuracy. To overcome local hardware limitations, I utilized AWS SageMaker for scalable model training. I also performed hyperparameter optimization with grid search and k-fold cross-validation, while executing comprehensive data preprocessing, including batching, cleaning, and normalization, to address data imbalance and prevent overfitting."
          role="Machine Learning Intern"
        />
        <HistoryCell
          year="Aug 2022 - Present"
          title="AI Research Assisstant @ Carnegie Mellon University"
          duration="Pittsburgh, PA"
          details="As part of my research role, I authored over four curriculum modules for an IRB-reviewed research study, focusing on advanced machine learning (ML) and natural language processing (NLP) concepts. I also conducted an in-depth evaluation of chatbot development platforms such as Botpress, assessing their applicability in educational contexts."
        />
        <HistoryCell
          year="June 2023 - Aug 2023" 
          title="Software Developer Intern @ Lastwall Networks"
          duration="New Brunswick, Canada"
          details="In this internship at Lastwall, I enhanced the precision of risk-based authentication software through data analysis with SQL and rigorous backend testing in TypeScript. I achieved universal UI responsiveness across devices using ReactJS, implementing flex/grid layouts and relative sizing. Additionally, I collaborated with cross-functional Agile teams in NIST-compliant sprints, adhering to stringent security protocols throughout the development process."
          role="Software Developer Intern"
        />
      </div>
    </div>
  );
}

export default History;
