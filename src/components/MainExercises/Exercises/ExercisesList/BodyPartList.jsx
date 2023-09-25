import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBodyParts } from '../../../../redux/exercises/operationsExercises';
import { selectBodyParts } from '../../../../redux/exercises/selectorsExercises';
import { ExercisesUl } from './ExercisesList.styled';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';

import Pagination from '../Pagination/Pagination';
import { PaginationContainer } from '../Pagination/Pagination.styled';

export const BodyPartList = ({ handleFilterClick, handleSetExName }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBodyParts());
  }, [dispatch]);

  const bodyParts = useSelector(selectBodyParts);
  const [currentPage, setCurrentPage] = useState(1);

  const determineItemsPerPage = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 768 && windowWidth <= 1439) {
      return 9;
    } else {
      return 10;
    }
  };

  const [itemsPerPage, setItemsPerPage] = useState(determineItemsPerPage);

  const handleResize = () => {
    setItemsPerPage(determineItemsPerPage());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bodyParts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <PaginationContainer>
      <ExercisesUl>
        {currentItems.map(item => (
          <ExercisesItem
            key={item._id}
            exercisesItem={item}
            handleFilterClick={handleFilterClick}
            handleSetExName={handleSetExName}
          />
        ))}
      </ExercisesUl>
      {itemsPerPage < bodyParts.length && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={bodyParts.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </PaginationContainer>
  );
};

BodyPartList.propTypes = {
  bodyParts: PropTypes.array,
};
