/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from './utils/testUtils';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

test('App component should render all components and have ranking text', () => {
  window.crypto = jest.fn();
  window.crypto.getRandomValues = jest.fn();
  window.getComputedStyle = (eletm, select) => getComputedStyle(eletm, select);
  render(<App />);
  const linkElement = screen.getByText(/ranking/i);
  expect(linkElement).toBeInTheDocument();
});
