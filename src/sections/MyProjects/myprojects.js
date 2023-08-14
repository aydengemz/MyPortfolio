import ProjectCard from "./projectCard";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import SchemaIcon from "@mui/icons-material/Schema";
import "./myprojects.css";

const MyProjects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="capHeader">My Projects</h2>

      <div className="projList">
        <ProjectCard
          project="GenAI"
          content="Showcases the various possibilites of generative AI models. 
          Technologies I used include: Streamlit, Hugging Face, OpenAI Models, and Langchain. 
          Feel free to try the app out or view my diagram on how the app works!"
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
        />
        <ProjectCard
          project="AWS Amplify"
          content="This app was made to practice using the different AWS services, and to practice using CRUD APIs.
           I was drawn by the potential that the cloud holds so I made this app to dive deeper into it."
          skills={[
            { id: "3", content: "NextJS" },
            { id: "4", content: "AWS" },
          ]}
          links={[
            {
              id: "0",
              link: "https://github.com/aydengemz/AmplifyApp",
              icon: GitHubIcon,
            },
          ]}
        ></ProjectCard>
        <ProjectCard
          project="Penguin Shooter"
          content="A game made with Python where you are a Penguin and try to survive an onslaught of different shapes. 
          Defeating eneimes gives you EXP to level up and leveling up give you power ups! "
          skills={[
            { id: "5", content: "Python" },
            { id: "6", content: "Pathfinding" },
          ]}
          links={[
            {
              id: "0",
              link: "https://drive.google.com/drive/folders/11clILE1mRHGbkJE5Cerp539XlABft8Tf",
              icon: GitHubIcon,
            },
            {
              id: "1",
              link: "https://www.youtube.com/watch?v=X2xYm5i3MjI",
              icon: YouTubeIcon,
            },
          ]}
        ></ProjectCard>
      </div>
    </section>
  );
};

export default MyProjects;
