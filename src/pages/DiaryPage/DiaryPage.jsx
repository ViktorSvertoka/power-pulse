import DaySwitch from '../../components/Diary/DaySwitch/DaySwitch';
import DashboardItemBig from '../../components/DashboardItemBig/DashboardItemBig';
import DayDashboard from '../../components/Diary/DayDashboard/DayDashboard';
import {
  DiaryTitle,
  WrapperAll,
  WrapTitleDate,
  WrapDashboard,
} from './DiaryPage.styled';
import { Container } from '../../styles/container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchExercises } from '../../redux/exercises/operationsExercises';
import { selectExercises } from '../../redux/exercises/selectorsExercises';

const DiaryPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExercises());
  }, []);

  const exercises = useSelector(selectExercises);
  console.log(exercises);
  return (
    <Container>
      <WrapperAll>
        <WrapTitleDate>
          <DiaryTitle>Diary</DiaryTitle>
          <DaySwitch></DaySwitch>
        </WrapTitleDate>
        <WrapDashboard>
          <DashboardItemBig></DashboardItemBig>
          <DayDashboard></DayDashboard>
        </WrapDashboard>
      </WrapperAll>
    </Container>
  );
};

export default DiaryPage;
