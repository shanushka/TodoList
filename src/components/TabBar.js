import React from "react";
import "./TabBar.css";
const TabBar = props => {
  console.log("ss", props.activeState);

  return (
    <div className='Tabs'>
      <div
        className={
          props.activeState === "Home" ? "tablinks active" : "tablinks"
        }
        onClick={() => props.activeStage("Home")}
      >
        Home
      </div>
      <div
        className={
          props.activeState === "Completed" ? "tablinks active" : "tablinks"
        }
        onClick={() => props.activeStage("Completed")}
      >
        Completed
      </div>
      <div
        className={
          props.activeState === "Incomplete" ? "tablinks active" : "tablinks"
        }
        onClick={() => props.activeStage("Incomplete")}
      >
        Incomplete
      </div>
    </div>
  );
};
export default TabBar;
