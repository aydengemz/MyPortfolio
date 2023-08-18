import ProjectCard from "./projectCard";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import SchemaIcon from "@mui/icons-material/Schema";
import "./myprojects.css";

const MyProjects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="capHeader">
      <h2>My Projects</h2>
      </div>


      <div className="projList">
        <ProjectCard
          project="GenAI"
          content="Utilized Langchain as the orchestration framework for integrating GenAI models and APIs together for unique functionalities 
          Explored GPT4 function calling capabilities using web services such as SerpAPI and RapidAPI
       
          "
          skills={[
            { id: "0", content: "Langchain" },
            { id: "1", content: "Streamlit" },
            { id: "2", content: "Hugging Face" },
          ]}
          links={[
            { id: "0", link: "https://github.com/aydengemz/GenAI", icon: GitHubIcon },
            {
              id: "1",
              link: "https://www.figma.com/file/E9WcNTZPc1gCoj2M900GQf/GenAI-Diagrams?type=whiteboard&node-id=0%3A1&t=4TeBcJ3t1ksPyYsr-1",
              icon: SchemaIcon,
            },
            {
              id: "2",
              link: "https://geneai.streamlit.app/",
              icon: LaunchIcon,
            },
          ]}
          image="https://github.com/aydengemz/MyPortfolio/blob/main/public/Untitled%20design%20(3).png?raw=true"

        />
        <ProjectCard
          project="AWS Amplify"
          content="This app was made to practice using the different AWS services, and to practice using CRUD APIs.
           I was drawn by the potential that the cloud holds so I made this app to dive deeper into it."
          skills={[
            { id: "3", content: "NextJS" },
            { id: "4", content: "AWS" },
            { id: "7", content: "CRUD" },
          ]}
          links={[
            {
              id: "0",
              link: "https://github.com/aydengemz/AmplifyApp",
              icon: GitHubIcon,
            },
          ]}
          image="https://docs.amplify.aws/assets/ogp.jpg"
        ></ProjectCard>
        <ProjectCard
          project="Penguin Shooter"
          content="A game made with Python where you are a Penguin and try to survive an onslaught of different shapes. 
          Defeating eneimes gives you EXP to level up and leveling up give you power ups! "
          skills={[
            { id: "5", content: "Python" },
            { id: "6", content: "Algorithms" },
          ]}
          links={[
            {
              id: "0",
              link: "https://drive.google.com/drive/folders/11clILE1mRHGbkJE5Cerp539XlABft8Tf",
              icon: GitHubIcon,
            },
            {
              id: "1",
              link: "https://www.youtube.com/watch?v=52LQnWMGuWw",
              icon: YouTubeIcon,
            },
          ]}
          image="https://github.com/aydengemz/MyPortfolio/blob/main/public/Untitled%20design%20(2).png?raw=true"
        ></ProjectCard>
      </div>
    </section>
  );
};

export default MyProjects;
