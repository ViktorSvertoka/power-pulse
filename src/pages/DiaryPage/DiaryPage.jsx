import DairyStatisticList from '../../components/DairyStatisticList/DairyStatisticList';
import DiaryProductsItemOrExercisesItem from '../../components/DiaryProductsItemOrExercisesItem/DiaryProductsItemOrExercisesItem';

import {
  DiaryWrapper,
  CustomDivForTables,
  DiaryPageContainer,
  TitleAndSwitchContainer,
  WrapperCards,
  StyledTitle,
  DescriptionText,
  DescriptionWrapper,
} from './DiaryPage.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDiaryList } from '../../redux/diary/operations';
import {
  // getDiaryExercises,
  getDiaryProducts,
} from '../../redux/diary/selectors';
import DaySwitch from '../../components/DaySwitch/DaySwitch';
import { Container } from '../../styles/container';
import ExclamationCircle from '../../components/ExclamationCircle/ExclamationCircle';

const Diary = () => {
  const productsList = useSelector(getDiaryProducts);
  // const exercisesList = useSelector(getDiaryExercises);
  console.log(productsList);
  const dispatch = useDispatch();

  const date = '26/09/2023';

  useEffect(() => {
    dispatch(getDiaryList(date));
  }, [dispatch]);

  if (!productsList) {
    return null;
  }

  return (
    <Container>
      <DiaryWrapper>
        <TitleAndSwitchContainer>
          <StyledTitle>Diary</StyledTitle>
          <DaySwitch></DaySwitch>
        </TitleAndSwitchContainer>

        <DiaryPageContainer>
          <WrapperCards>
            <DairyStatisticList />
            <DescriptionWrapper>
              <ExclamationCircle />
              <DescriptionText>
                Record all your meals in a calorie diary every day. This will
                help me be aware of my nutrition and make me responsible for my
                choices.
              </DescriptionText>
            </DescriptionWrapper>
          </WrapperCards>
          <CustomDivForTables>
            <DiaryProductsItemOrExercisesItem
              marginBottom={40}
              list={productsList}
              productTable
              date={date}
              to={'/products'}
            />

            <DiaryProductsItemOrExercisesItem
              // list={exercisesList}
              exerciseTable
              date={date}
              to={'/exercises'}
            />
          </CustomDivForTables>{' '}
        </DiaryPageContainer>
      </DiaryWrapper>
    </Container>
  );
};

export default Diary;
