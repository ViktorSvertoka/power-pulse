import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import { ExercisesUl } from './ExercisesList.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBodyParts } from '../../../../redux/exercises/operationsExercises';
import { selectBodyParts } from '../../../../redux/exercises/selectorsExercises';
import { useEffect, useState } from 'react';

import Pagination from '../Pagination/Pagination';
import { PaginationContainer } from '../Pagination/Pagination.styled';

export const BodyPartList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBodyParts());
  }, [dispatch]);

  const bodyParts = useSelector(selectBodyParts);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

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
          <ExercisesItem key={item._id} exercisesItem={item} />
        ))}
      </ExercisesUl>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={bodyParts.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </PaginationContainer>
  );
};

BodyPartList.propTypes = {
  bodyParts: PropTypes.array,
};
