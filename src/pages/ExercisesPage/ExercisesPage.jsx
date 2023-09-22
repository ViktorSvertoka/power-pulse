import { Container } from '../../styles/container';

import { WaistList } from '../../components/MainExercises/Waist/WaistList/WaistList';
import { ExercisesWrap } from '../../components/MainExercises/Exercises/ExercisesWrap/ExercisesWrap';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectBodyParts,
  selectEquipment,
  selectMuscules,
} from '../../redux/exercises/selectorsExercises';
import {
  fetchBodyParts,
  fetchEquipment,
  fetchMuscules,
} from '../../redux/exercises/operationsExercises';
import { useEffect } from 'react';

const ExercisesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBodyParts());
  }, []);
  useEffect(() => {
    dispatch(fetchMuscules());
  }, []);
  useEffect(() => {
    dispatch(fetchEquipment());
  }, []);
  const bodyParts = useSelector(selectBodyParts);
  console.log(bodyParts);
  const muscules = useSelector(selectMuscules);
  console.log(muscules);
  const equipment = useSelector(selectEquipment);
  console.log(equipment);

  return (
    <Container>
      <WaistList></WaistList>

      <ExercisesWrap></ExercisesWrap>
    </Container>
  );
};

export default ExercisesPage;
