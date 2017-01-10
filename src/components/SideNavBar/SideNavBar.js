import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import '../../styles/Common.scss';
import LeftPanel from '../../containers/LeftPanel';
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
    default:
      show = <span onClick={() => toggleShowItem(constants.PROFILE)}>'juano'</span>
  }

  return (
    <div>
      <Header/>
      {show}
    </div>
  );
}

export default SideNavBar;
