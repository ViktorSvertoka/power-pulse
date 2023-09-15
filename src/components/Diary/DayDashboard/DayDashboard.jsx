import DashboardItem from '../../DashboardItem/DashboardItem';
import Icon from '../../Icon/Icon';
import { Grid, GridItem, Wrapper } from './DayDashboard.styled';

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
      <div>
        <Icon symbolId="icon-arrow-right" width="16" height="16" />
        <span>
          Record all your meals in a calorie diary every day. This will help me
          be aware of my nutrition and make me responsible for my choices.
        </span>
      </div>
    </Wrapper>
  );
};

export default DayDashboard;
