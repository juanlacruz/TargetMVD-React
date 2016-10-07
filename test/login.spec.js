import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Login from '../src/components/Login/Login';

describe('<Login>', function () {
  it('should have a title', function () {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find('h2')).to.have.length(1);
  });

  it('should have a prop for submitLogin', function () {
    const wrapper = shallow(<Login/>);
    expect(wrapper.props().submitLogin).to.be.defined;
  });
});
