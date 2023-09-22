import DairyStatisticList from '../../components/DairyStatisticList/DairyStatisticList';
import DayDiaryProductsOrExercises from '../../components/DayDiaryProductsOrExercises/DayDiaryProductsOrExercises';

import {
  DiaryWrapper,
  CustomDivForCards,
  CustomDivForTables,
  DiaryPageContainer,
} from './DiaryPage.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDiaryList } from '../../redux/diary/operations';
import {
  getDiaryExercises,
  getDiaryProducts,
} from '../../redux/diary/selectors';
import Title from '../../components/Title/Title';
import DescriptionText from '../../components/DescriptionText/DescriptionText';

const Diary = () => {
  const productsList = useSelector(getDiaryProducts);
  const exercisesList = useSelector(getDiaryExercises);

  const dispatch = useDispatch();

  const date = '23/09/2023';

  useEffect(() => {
    dispatch(getDiaryList(date));
  }, [dispatch]);

  return (
    <DiaryWrapper>
      <Title text={'Diary'} />
      <DiaryPageContainer>
        <CustomDivForCards>
          <DairyStatisticList />
          <DescriptionText
            text="Record all your meals in a calorie diary every day. This will help me be
     aware of my nutrition and make me responsible for my choices."
            width={{ tablet: 593, desktop: 390 }}
          />
        </CustomDivForCards>
        <CustomDivForTables>
          <DayDiaryProductsOrExercises
            marginBottom={40}
            list={productsList}
            productTable
            date={date}
            to={'/products'}
          />

          <DayDiaryProductsOrExercises
            list={exercisesList}
            exerciseTable
            date={date}
            to={'/exercises'}
          />
        </CustomDivForTables>{' '}
      </DiaryPageContainer>
    </DiaryWrapper>
  );
};

export default Diary;
