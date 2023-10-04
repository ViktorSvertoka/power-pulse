import { useEffect, useState } from 'react';
import { List } from './DairyStatisticList.styled';
import DailyStatsCards from '../DailyStatsCards/DailyStatsCards';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import {
  getBurnedCalories,
  getCalories,
  getDoneExercisesTime,
} from '../../redux/diary/selectors';

const DairyStatisticList = () => {
  const user = useSelector(selectUser);
  const consumedCalories = useSelector(getCalories);
  const doneExercisesTime = useSelector(getDoneExercisesTime);
  const burnedCalories = useSelector(getBurnedCalories);

  const defaultDayTime = 110;

  const [resultTime, setResultTime] = useState(
    defaultDayTime - doneExercisesTime,
  );

  useEffect(() => {
    setResultTime(defaultDayTime - doneExercisesTime);
  }, [doneExercisesTime]);

  const bmr = user.bmr;
  const restCalories = bmr - consumedCalories;

  // function secondsToMinutesAndSeconds(seconds) {
  //   const minutes = Math.floor(seconds / 60);
  //   const remainingSeconds = seconds % 60;

  //   return { minutes, seconds: remainingSeconds };
  // }

  // const totalMinutes = doneExercisesTime / 60;
  // const result = secondsToMinutesAndSeconds(totalMinutes * 60);
  // let resultTime = defaultDayTime - result.minutes;

  return (
    <List>
      <DailyStatsCards
        icon="icon-fork-knife"
        fill="true"
        label="Daily calorie intake"
        keyValue={bmr !== undefined ? String(bmr) : '2200'}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="icon-dumbbell"
        fill="true"
        label="Daily norm of sports"
        keyValue={defaultDayTime !== undefined ? String(defaultDayTime) : '110'}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="icon-apple"
        label="Сalories consumed"
        keyValue={
          consumedCalories !== undefined ? String(consumedCalories) : '0'
        }
      ></DailyStatsCards>
      <DailyStatsCards
        icon="icon-fire"
        label="Сalories burned"
        keyValue={burnedCalories}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="icon-bubble"
        label="The rest of the calories"
        keyValue={restCalories !== undefined ? String(restCalories) : '0'}
        border={restCalories < 0 ? 'red' : 'default'}
      ></DailyStatsCards>
      <DailyStatsCards
        icon="icon-running-figure"
        label="The rest of sports"
        keyValue={resultTime !== undefined ? String(resultTime) + ' min' : '0'}
        border={resultTime > defaultDayTime ? 'green' : 'red'}
      ></DailyStatsCards>
    </List>
  );
};

export default DairyStatisticList;
