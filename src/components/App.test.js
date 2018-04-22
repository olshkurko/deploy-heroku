/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('../conteiners/PrivateRoute', () => () => 'PrivateRoute');
jest.mock('../conteiners/WelcomePage', () => () => 'WelcomePage');
jest.mock('../conteiners/ChatPage', () => () => 'ChatPage');

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
