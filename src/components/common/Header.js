import React from 'react';
import * as constants from '../../constants';

const Header = ({ toggleShowItem }) => {
  return (
    <span className="close-icon" onClick={() => toggleShowItem(constants.HOME)} />
  );
};

export default Header;
