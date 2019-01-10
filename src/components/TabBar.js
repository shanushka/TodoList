import React from "react";

const TabBar = () => {
  return (
    <div className='tab'>
      <button className='tablinks'>Home</button>
      <button className='tablinks'>Completed</button>
      <button className='tablinks'>Incomplete</button>
    </div>
  );
};
export default TabBar;
