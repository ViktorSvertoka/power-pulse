import { useEffect, useState } from 'react'; // Импортируйте useState
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchEquipment } from '../../../../redux/exercises/operationsExercises';
import { selectEquipment } from '../../../../redux/exercises/selectorsExercises';
import { ExercisesUl } from './ExercisesList.styled';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';

import Pagination from '../Pagination/Pagination';
import { PaginationContainer } from '../Pagination/Pagination.styled';

export const EquipmentList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEquipment());
  }, [dispatch]);

  const equipment = useSelector(selectEquipment);
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
  const currentItems = equipment.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <PaginationContainer>
      <ExercisesUl>
        {currentItems.map(item => (
          <ExercisesItem key={item._id} exercisesItem={item} />
        ))}
      </ExercisesUl>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={equipment.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </PaginationContainer>
  );
};

EquipmentList.propTypes = {
  equipment: PropTypes.array,
};
