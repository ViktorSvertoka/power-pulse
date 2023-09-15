import DaySwitch from '../../components/Diary/DaySwitch/DaySwitch';
import DashboardItemBig from '../../components/DashboardItemBig/DashboardItemBig';
import DayDashboard from '../../components/Diary/DayDashboard/DayDashboard';
import { DiaryTitle, WrapperAll, WrapTitleDate } from './DiaryPage.styled';

const DiaryPage = () => {
  return (
    <WrapperAll>
      <WrapTitleDate>
        <DiaryTitle>Diary</DiaryTitle>
        <DaySwitch></DaySwitch>
      </WrapTitleDate>
      <WrapTitleDate>
        <DashboardItemBig></DashboardItemBig>
        <DayDashboard></DayDashboard>
      </WrapTitleDate>
    </WrapperAll>
  );
};

export default DiaryPage;
