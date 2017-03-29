import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

import Avatar from './index';

describe('With ReactDOM', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Avatar />, div);
  });
})

describe('With Enzyme', () => {
  it('shallow renders without crashing', () => {
    shallow(<Avatar />);
  });
})

describe('With Snapshot Testing', () => {
  it('Avatar renders the same way', () => {
    const component = renderer.create(<Avatar />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})