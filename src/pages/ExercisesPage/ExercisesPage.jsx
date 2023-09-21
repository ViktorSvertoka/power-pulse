import { Container } from '../../styles/container';

import { WaistList } from '../../components/MainExercises/Waist/WaistList/WaistList';
import { ExercisesWrap } from '../../components/MainExercises/Exercises/ExercisesWrap/ExercisesWrap';

// import { useDispatch, useSelector } from 'react-redux';
// import { selectAllExercises } from '../../redux/exercises/selectorsExercises';

const ExercisesPage = () => {
  // const dispatch = useDispatch();
  // const exercises = useSelector(selectAllExercises);
  // console.log(exercises);
  return (
    <Container>
      <WaistList></WaistList>

      <ExercisesWrap></ExercisesWrap>
    </Container>
  );
};

export default ExercisesPage;
