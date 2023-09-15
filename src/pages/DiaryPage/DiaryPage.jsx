import DaySwitch from '../../components/Diary/DaySwitch/DaySwitch';
import DayProducts from '../../components/Diary/DayProducts/DayProducts';
import DayExercises from '../../components/Diary/DayExercises/DayExercises';
import DayDashboard from '../../components/Diary/DayDashboard/DayDashboard';
import { DiaryTitle, Wrapper } from './DiaryPage.styled';

const DiaryPage = () => {
  return (
    <Wrapper>
      <DiaryTitle>Diary</DiaryTitle>
      <DaySwitch></DaySwitch>
      <DayProducts></DayProducts>
      <DayExercises></DayExercises>
      <DayDashboard></DayDashboard>
    </Wrapper>
  );
};

export default DiaryPage;
