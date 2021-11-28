import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders the home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo List/i);
  expect(linkElement).toBeInTheDocument();
});
