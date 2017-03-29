import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

import HeaderLink from './index';

describe('With ReactDOM', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeaderLink />, div);
  });
})

describe('With Enzyme', () => {
  it('shallow renders without crashing', () => {
    shallow(<HeaderLink />);
  });
})

describe('With Snapshot Testing', () => {
  it('HeaderLink renders the same way', () => {
    const component = renderer.create(<HeaderLink />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
