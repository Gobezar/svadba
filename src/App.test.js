import { render, screen } from '@testing-library/react';
import App from './App';

test('renders invitation names', () => {
  render(<App />);
  expect(screen.getAllByText(/Юлия/).length).toBeGreaterThan(0);
  expect(screen.getByText(/Вы придете/)).toBeInTheDocument();
  expect(screen.getByText(/Территория Кофе/)).toBeInTheDocument();
});
