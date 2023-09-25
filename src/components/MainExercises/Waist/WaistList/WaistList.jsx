import { useDispatch, useSelector } from 'react-redux';
import { WaistItem } from '../WaistItem/WaistItem';
import { WaistItemUl, NoExercisesTitle } from './WaistList.styled';
import {
  selectBodyParts,
  selectExercises,
} from '../../../../redux/exercises/selectorsExercises';
import { useEffect } from 'react';
import { fetchExercises } from '../../../../redux/exercises/operationsExercises';
// import BasicModalWindow from '../../../BasicModalWindow/BasicModalWindow'
// import {ExersiceModalWindow} from '../../../ExersiceModalWindow/ExersiceModalWindow'

export const WaistList = ({ exerciseName }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  const exercises = useSelector(selectExercises);
  const visibleExercises = exercises.filter(
    exercise =>
      exercise.bodyPart ||
      exercise.target ||
      exercise.equipment === exerciseName,
  );
  return (
    <WaistItemUl>
      {visibleExercises.length ? (
        visibleExercises.map(el => <WaistItem key={el._id} data={el} />)
      ) : (
        <NoExercisesTitle>
          There is not exercises downloaded else, plaese try choose this
          categorie later!!!
        </NoExercisesTitle>
      )}
    </WaistItemUl>
  );
};
