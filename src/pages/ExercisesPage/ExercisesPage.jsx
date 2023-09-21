import { Container } from '../../styles/container';

import {
  Wrap,
  ExercisesTitle,
  ExercisesNavList,
  ExercisesFilter,
} from './ExercisesPage.styled';

import { WaistList } from '../../components/MainExercises/Waist/WaistList/WaistList';
import { ExercisesList } from '../../components/MainExercises/Exercises/ExercisesList/ExercisesList';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectAllExercises } from '../../redux/exercises/selectorsExercises';

const ExercisesPage = () => {
  // const dispatch = useDispatch();
  // const exercises = useSelector(selectAllExercises);
  // console.log(exercises);
  return (
    <Container>
      <Wrap>
        <ExercisesTitle>Exercises</ExercisesTitle>
        <ExercisesNavList>
          <ExercisesFilter>Body parts</ExercisesFilter>
          <ExercisesFilter>Muscules</ExercisesFilter>
          <ExercisesFilter>Equipment</ExercisesFilter>
        </ExercisesNavList>
      </Wrap>
      <WaistList></WaistList>

      <ExercisesList></ExercisesList>
    </Container>
  );
};

export default ExercisesPage;
