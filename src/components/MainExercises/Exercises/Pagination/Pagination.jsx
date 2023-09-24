import PropTypes from 'prop-types';
import sprite from '../../../../images/sprite.svg';
import { PaginationItem } from './Pagination.styled';

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginationItem
          key={i}
          className={`page-item ${i === currentPage ? 'active' : ''}`}
        >
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
            {i === currentPage && (
              <svg>
                <use href={`${sprite}#pagination-btn`} />
              </svg>
            )}
          </button>
        </PaginationItem>,
      );
    }

    return pageNumbers;
  };

  return (
    <nav aria-label="Pagination">
      <ul className="pagination">{renderPageNumbers()}</ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
