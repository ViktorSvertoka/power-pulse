import DayProducts from '../Diary/DayProducts/DayProducts';
import DayExercises from '../Diary/DayExercises/DayExercises';
import { Wrapper } from './DashboardItemBig.styled';

const DashboardItemBig = () => {
  return (
    <Wrapper>
      <DayProducts></DayProducts>
      <DayExercises></DayExercises>
    </Wrapper>
  );
};

export default DashboardItemBig;
