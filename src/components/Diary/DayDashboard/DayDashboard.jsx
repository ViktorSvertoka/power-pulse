import DashboardItem from '../../DashboardItem/DashboardItem';
import ExclamationCircle from '../ExclamationCircle/ExclamationCircle';
import {
  Grid,
  GridItem,
  TextWarning,
  WrapWarning,
  Wrapper,
} from './DayDashboard.styled';

const icons = [
  'icon-apple',
  'icon-fork-knife',
  'icon-dumbbell',
  'icon-running-figure',
  'icon-fire',
  'icon-pause-square',
];

const DayDashboard = () => {
  return (
    <Wrapper>
      <Grid>
        {icons.map((iconId, index) => {
          const color = index < 2 ? '#E6533C' : 'rgba(239, 237, 232, 0.05)';
          return (
            <GridItem key={index}>
              <DashboardItem color={color} iconId={iconId} />
            </GridItem>
          );
        })}
      </Grid>
      <WrapWarning>
        <ExclamationCircle />
        <TextWarning>
          Record all your meals in a calorie diary every day. This will help me
          be aware of my nutrition and make me responsible for my choices.
        </TextWarning>
      </WrapWarning>
    </Wrapper>
  );
};

export default DayDashboard;
