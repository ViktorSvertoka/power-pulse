import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import { ExercisesUl } from './ExercisesList.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMuscules } from '../../../../redux/exercises/operationsExercises';
import { selectMuscules } from '../../../../redux/exercises/selectorsExercises';
import { useEffect } from 'react';

export const MusculesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMuscules());
  }, [dispatch]);

  const muscules = useSelector(selectMuscules);
  return (
    <ExercisesUl>
      {muscules.map(item => (
        <ExercisesItem key={item._id} exercisesItem={item} />
      ))}
    </ExercisesUl>
  );
};

MusculesList.propTypes = {
  bodyParts: PropTypes.array,
};
