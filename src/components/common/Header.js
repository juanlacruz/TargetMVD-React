import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import * as constants from '../../constants';

const Header = ({ toggleShowItem, showItem }) => {
  return (
    <span className="close-icon" onClick={() => toggleShowItem(constants.HOME)}></span>
  );
};

export default Header;
