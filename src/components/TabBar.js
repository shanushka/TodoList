import React from 'react';

import classNames from 'classnames';

const TabBar = props => {
  var homeClass = classNames('tablinks', {
    active: props.activeState === 'Home'
  });

  var completeClass = classNames('tablinks', {
    active: props.activeState === 'Completed'
  });

  var inCompleteClass = classNames('tablinks', {
    active: props.activeState === 'Incomplete'
  });
  return (
    <div className='tabs'>
      <div className={homeClass} onClick={() => props.setActiveState('Home')}>
        Home
      </div>
      <div
        className={completeClass}
        onClick={() => props.setActiveState('Completed')}
      >
        Completed
      </div>
      <div
        className={inCompleteClass}
        onClick={() => props.setActiveState('Incomplete')}
      >
        Incomplete
      </div>
    </div>
  );
};

export default TabBar;
