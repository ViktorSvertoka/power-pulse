import { Container } from '../../styles/container';

import {
  Wrap,
  ExercisesTitle,
  ExercisesNavList,
  ExercisesFilter,
} from './ExercisesPage.styled';

import { WaistList } from '../../components/MainExercises/Waist/WaistList/WaistList';
import { ExercisesList } from '../../components/MainExercises/Exercises/ExercisesList/ExercisesList';

const ExercisesPage = () => {
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
