import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders App component', () => {
    render(<App />);
    // Check if the "OMDB" header text is present
    const headerElement = screen.getByText(/OMDB/i);
    expect(headerElement).toBeInTheDocument();

  });

  test('renders SearchInput component', () => {
    render(<App />);
    const searchInput = screen.getByRole('textbox');
    expect(searchInput).toBeInTheDocument();
  });

  test('initial search input value is empty', () => {
    render(<App />);
    const searchInput = screen.getByRole('textbox');
    expect(searchInput).toHaveValue('');
  });
});

