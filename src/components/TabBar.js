import React from 'react';

const TabBar = props => {
  return (
    <div className='Tabs'>
      <div
        className={
          props.activeState === 'Home' ? 'tablinks active' : 'tablinks'
        }
        onClick={() => props.setActiveState('Home')}
      >
        Home
      </div>
      <div
        className={
          props.activeState === 'Completed' ? 'tablinks active' : 'tablinks'
        }
        onClick={() => props.setActiveState('Completed')}
      >
        Completed
      </div>
      <div
        className={
          props.activeState === 'Incomplete' ? 'tablinks active' : 'tablinks'
        }
        onClick={() => props.setActiveState('Incomplete')}
      >
        Incomplete
      </div>
    </div>
  );
};
export default TabBar;
