/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from './Header';

jest.mock('./Avatar', () => () => 'Avatar');
jest.mock('./ChatMenu', () => () => 'ChatMenu');
jest.mock('./UserMenu', () => () => 'UserMenu');

const mockProps = {
  activeUser: {
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  activeChat: {
    _id: '12345',
    title: 'My Chat',
  },
  messages: [
    {
      chatId: '12345',
      content: 'content',
      sender: {},
      createdAt: '2018-03-16T10:53:23.200Z',
    },
  ],
  isConnected: true,
  logout: jest.fn(),
  leaveChat: jest.fn(),
  deleteChat: jest.fn(),
  editUser: jest.fn(),
};

describe('<Header />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Header {...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without active chat', () => {
    const tree = renderer.create(<Header {...mockProps} activeChat={null} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
