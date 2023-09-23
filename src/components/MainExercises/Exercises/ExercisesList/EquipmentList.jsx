import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchEquipment } from '../../../../redux/exercises/operationsExercises';
import { selectEquipment } from '../../../../redux/exercises/selectorsExercises';
import { ExercisesUl } from './ExercisesList.styled';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';

export const EquipmentList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEquipment());
  }, [dispatch]);

  const equipment = useSelector(selectEquipment);
  return (
    <ExercisesUl>
      {equipment.map(item => (
        <ExercisesItem key={item._id} exercisesItem={item} />
      ))}
    </ExercisesUl>
  );
};

EquipmentList.propTypes = {
  equipment: PropTypes.array,
};
