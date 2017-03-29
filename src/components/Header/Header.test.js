import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

import Header from './index';

describe('With ReactDOM', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
  });
})

describe('With Enzyme', () => {
  it('shallow renders without crashing', () => {
    shallow(<Header />);
  });
})

describe('With Snapshot Testing', () => {
  it('Header renders the same way', () => {
    const component = renderer.create(<Header />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
