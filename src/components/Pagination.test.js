import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
  it('renders pagination controls', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={2}
        handleNextPage={() => {}}
        handlePreviousPage={() => {}}
      />
    );

    expect(screen.getByText('Page 1 of 2')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('disables Previous button on first page', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={2}
        handleNextPage={() => {}}
        handlePreviousPage={() => {}}
      />
    );

    const previousButton = screen.getByText('Previous');
    expect(previousButton).toBeDisabled();
  });

  it('disables Next button on last page', () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={2}
        handleNextPage={() => {}}
        handlePreviousPage={() => {}}
      />
    );

    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeDisabled();
  });

});
