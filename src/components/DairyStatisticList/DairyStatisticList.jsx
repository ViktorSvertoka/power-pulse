import { List } from './DairyStatisticList.styled';
import DailyStatsCards from '../DailyStatsCards/DailyStatsCards';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

const DairyStatisticList = () => {
  const user = useSelector(selectUser);

  return (
    <List>
      <DailyStatsCards
        icon="icon-fork-knife"
        fill="true"
        label="Daily calorie intake"
        keyValue={user.bmr !== undefined ? String(user.bmr) : '2200'}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="icon-dumbbell"
        fill="true"
        label="Daily norm of sports"
        keyValue={'110 min'}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="icon-apple"
        label="Сalories consumed"
        keyValue={'0'}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="icon-fire"
        label="Сalories burned"
        keyValue={'0'}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="icon-bubble"
        label="The rest of the calories"
        keyValue={'2200'}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="icon-running-figure"
        label="The rest of sports"
        keyValue={'110 min'}
      ></DailyStatsCards>
    </List>
  );
};

export default DairyStatisticList;
