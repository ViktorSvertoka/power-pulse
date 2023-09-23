import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import { ExercisesUl } from './ExercisesList.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMuscules } from '../../../../redux/exercises/operationsExercises';
import { selectMuscules } from '../../../../redux/exercises/selectorsExercises';
import { useEffect, useState } from 'react';

import Pagination from '../Pagination/Pagination';
import { PaginationContainer } from '../Pagination/Pagination.styled';

export const MusculesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMuscules());
  }, [dispatch]);

  const muscules = useSelector(selectMuscules);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = muscules.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <PaginationContainer>
      <ExercisesUl>
        {currentItems.map(item => (
          <ExercisesItem key={item._id} exercisesItem={item} />
        ))}
      </ExercisesUl>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={muscules.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </PaginationContainer>
  );
};

MusculesList.propTypes = {
  muscules: PropTypes.array,
};
