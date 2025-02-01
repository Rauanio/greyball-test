/* eslint-disable react/display-name */
import { memo } from 'react';
import { Button } from '../Button/Button';
import { PageButton } from './PageButton';
// import { PageButton } from './PageButton';

interface PaginationProps {
  onNext: () => void;
  onPrev: () => void;
  onPageChange: (pg: number) => void;
  currentPage: number;
  totalPages: number;
}

export const Pagination = memo(
  ({
    currentPage,
    onNext,
    onPageChange,
    onPrev,
    totalPages,
  }: PaginationProps) => {
    const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

    if (totalPages < 2) {
      return null;
    }

    return (
      <div className='flex items-center gap-3'>
        <Button
          disabled={currentPage === 1 }
          onClick={onPrev}
          className='!px-2.5 '
          variant='primary'
          size='tiny'
        >
         prev
        </Button>
        <div className='flex gap-2'>
          {pagesArray.map((pageNum) => (
            <PageButton
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              isActive={pageNum === currentPage}
            >
              {pageNum}
            </PageButton>
          ))}
        </div>
        <Button
          disabled={currentPage === totalPages}
          onClick={onNext}
          className='!px-2.5'
          variant='primary'
          size='tiny'
        >
          Next
        </Button>
      </div>
    );
  }
);
