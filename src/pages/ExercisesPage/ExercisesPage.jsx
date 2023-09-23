import { Container } from '../../styles/container';

import { WaistList } from '../../components/MainExercises/Waist/WaistList/WaistList';
import { ExercisesWrap } from '../../components/MainExercises/Exercises/ExercisesWrap/ExercisesWrap';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectEquipment,
  selectMuscules,
} from '../../redux/exercises/selectorsExercises';
import {
  fetchEquipment,
  fetchMuscules,
} from '../../redux/exercises/operationsExercises';
import { useEffect } from 'react';

const ExercisesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMuscules());
  }, []);
  useEffect(() => {
    dispatch(fetchEquipment());
  }, []);

  const muscules = useSelector(selectMuscules);
  console.log(muscules);
  const equipment = useSelector(selectEquipment);
  console.log(equipment);

  return (
    <Container>
      <ExercisesWrap></ExercisesWrap>
      <WaistList></WaistList>
    </Container>
  );
};

export default ExercisesPage;
