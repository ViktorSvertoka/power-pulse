import { Container } from '../../styles/container';

// import { WaistList } from '../../components/MainExercises/Waist/WaistList/WaistList';
import { ExercisesWrap } from '../../components/MainExercises/Exercises/ExercisesWrap/ExercisesWrap';

const ExercisesPage = () => {
  return (
    <Container>
      <ExercisesWrap></ExercisesWrap>
      {/* <WaistList></WaistList> */}
    </Container>
  );
};

export default ExercisesPage;
