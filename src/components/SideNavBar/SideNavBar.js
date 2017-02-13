import React from 'react';
import '../../styles/Common.scss';
import LeftPanel from '../../containers/LeftPanel';
import Target from '../Target/Target';
import Header from '../../containers/Header';
import * as constants from '../../constants';

const SideNavBar = ({ toggleShowItem, showItem }) => {
  const sideBar = (
    <div className="side-bar">
      <ul>
        <li onClick={() => toggleShowItem(constants.PROFILE)}>Profile</li>
        <li onClick={() => toggleShowItem(constants.TARGET)}>Target</li>
        <li onClick={() => toggleShowItem(constants.CONTACT)}>Contact</li>
        <li onClick={() => toggleShowItem(constants.ABOUT)}>About</li>
      </ul>
    </div>
  );

  let show;
  switch (showItem) {
    case constants.HOME:
      show = sideBar;
      break;
    case constants.PROFILE:
      show = <LeftPanel/>;
      break;
    case constants.TARGET:
      show = <Target/>;
      break;
    default:
      show = <span onClick={() => toggleShowItem(constants.PROFILE)}>'juano'</span>;
  }

  return (
    <div>
      <Header/>
      {show}
    </div>
  );
};

export default SideNavBar;
