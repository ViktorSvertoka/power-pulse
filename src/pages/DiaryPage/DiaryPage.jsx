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

const DiaryPage = () => {
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
