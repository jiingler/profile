import "reset-css";
import "./App.scss";

import Header from "./components/Header";
import Profile from "./components/Profile";
import Experiences from "./components/Experiences";
import Abilities from "./components/Abilities";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Profile />
      </div>
      <Experiences />
      {/* <div className="container">
        <Abilities />
      </div> */}
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
