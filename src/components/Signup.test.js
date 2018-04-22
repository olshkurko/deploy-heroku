/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Signup from './Signup';

const mockProps = {
  onSubmit: jest.fn(),
};

describe('<Signup />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Signup {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Signup {...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
