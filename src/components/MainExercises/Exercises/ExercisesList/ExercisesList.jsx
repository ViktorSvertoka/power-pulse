import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import { ExercisesUl } from './ExercisesList.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBodyParts } from '../../../../redux/exercises/operationsExercises';
import { selectBodyParts } from '../../../../redux/exercises/selectorsExercises';
import { useEffect } from 'react';

export const ExercisesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBodyParts());
  }, [dispatch]);

  const bodyParts = useSelector(selectBodyParts);
  return (
    <ExercisesUl>
      {bodyParts.map(item => (
        <ExercisesItem key={item._id} bodyPartItem={item} />
      ))}
    </ExercisesUl>
  );
};

ExercisesList.propTypes = {
  bodyParts: PropTypes.array,
};
