import React from "react";
import "./TabBar.css";
const TabBar = props => {
  return (
    <div className='Tabs'>
      <div className='tablinks' onClick={() => props.activeStage("Home")}>
        Home
      </div>
      <div className='tablinks' onClick={() => props.activeStage("Completed")}>
        Completed
      </div>
      <div className='tablinks' onClick={() => props.activeStage("Incomplete")}>
        Incomplete
      </div>
    </div>
  );
};
export default TabBar;
