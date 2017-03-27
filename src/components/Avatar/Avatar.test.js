import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Avatar from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Avatar />, div);
});

it('shallow renders without crashing', () => {
  shallow(<Avatar />);
});
