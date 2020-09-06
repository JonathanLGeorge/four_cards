import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import builder from "./components/images/icon-team-builder.svg";
import supervisor from "./components/images/icon-supervisor.svg";
import karma from "./components/images/icon-karma.svg";
import calc from "./components/images/icon-calculator.svg";
const cardInfo = [
  {
    title: "Supervisor",
    text: "Monitors activity to identify project roadblocks",
    image: supervisor,
    box: "box box-cyan box-push",
  },
  {
    title: "Team Builder",
    text: "Scans our talentnetwork to create the optimal team for your project",
    image: builder,
    box: "box box-red",
  },
  {
    title: "Calculator",
    text: "Uses data from past projects to provide better delivery estimates",
    image: calc,
    box: "box box-blue box-push",
  },
  {
    title: "Karma",
    text: "Regularly evaluates our talent to ensure quality",
    image: karma,
    box: "box box-orange",
  },
];
function App() {
  return (
    <div className="bodypage">
      <header>
        <h1>Reliable, efficient delivery</h1>
        <h1 className="spanning">Powered by Technology</h1>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          pointsto ensure that your project is successful
        </p>
      </header>

      <div class="container">
        <Cards info={cardInfo[0]} />
        <Cards info={cardInfo[1]} />
        <Cards info={cardInfo[2]} />
        <Cards info={cardInfo[3]} />
      </div>
    </div>
  );
}

export default App;
