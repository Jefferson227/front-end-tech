import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent, waitForElement } from '@testing-library/react'

const renderComponent = () => render(<App />)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
