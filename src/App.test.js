import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('app', () => {
  test('renders the root app component', () => {
    const { getByTestId } = render(<App />);
    const appElement = getByTestId('App');
    expect(appElement).toBeInTheDocument();
  });
})
