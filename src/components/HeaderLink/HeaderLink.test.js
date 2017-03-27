import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import HeaderLink from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderLink />, div);
});

it('shallow renders without crashing', () => {
  shallow(<HeaderLink />);
});
