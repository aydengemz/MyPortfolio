import "./App.css";
import Hero from "./sections/Hero/Hero";
import NavBar from "./sections/Navbar/nav";
import Info from "./sections/Info/info";
import MyProjects from "./sections/MyProjects/myprojects";
import History from "./sections/History/History";
import About from "./sections/AboutMe/about";

function App() {
  return (
    <div className="wholeApp">
      <NavBar />
      <Hero />
      <About />
      <MyProjects />
      <History />
      <Info />
    </div>
  );
}
export default App;
