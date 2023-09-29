import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { getDiaryList } from '../../redux/diary/operations';
import {
  getDiaryExercises,
  getDiaryProducts,
  getIsLoadingDiary,
} from '../../redux/diary/selectors';
import DaySwitch from '../../components/DaySwitch/DaySwitch';
import { Container } from '../../styles/container';
import ExclamationCircle from '../../components/ExclamationCircle/ExclamationCircle';
import DairyStatisticList from '../../components/DairyStatisticList/DairyStatisticList';
import DiaryProductsItemOrExercisesItem from '../../components/DiaryProductsItemOrExercisesItem/DiaryProductsItemOrExercisesItem';

const Diary = () => {
  const [formatDate, setFormatDate] = useState('');
  const productsList = useSelector(getDiaryProducts);
  const exercisesList = useSelector(getDiaryExercises);
  // const isLoadingDairy = useSelector(getIsLoadingDiary);

  const dispatch = useDispatch();

  const handleSelectedDateChange = date => {
    if (date) {
      const formattedDate = `${String(date.getDate()).padStart(
        2,
        '0',
      )}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
      setFormatDate(formattedDate);
      dispatch(getDiaryList(formattedDate));
    }
  };

  useEffect(() => {
    const savedDate = localStorage.getItem('selectedDate');
    if (savedDate) {
      const parsedDate = new Date(savedDate);
      if (!isNaN(parsedDate.getTime())) {
        handleSelectedDateChange(parsedDate);
        return;
      }
    }
    const currentDate = new Date();

    handleSelectedDateChange(currentDate);
  }, []);

  return (
    <Container>
      <DiaryWrapper>
        <TitleAndSwitchContainer>
          <StyledTitle>Diary</StyledTitle>
          <DaySwitch
            setSelectedDate={handleSelectedDateChange}
            onDateChange={handleSelectedDateChange}
          />
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
              key={formatDate}
              marginBottom={40}
              list={productsList}
              productTable
              date={formatDate}
              to={'/products'}
            />
            <DiaryProductsItemOrExercisesItem
              list={exercisesList}
              exerciseTable
              date={formatDate}
              to={'/exercises'}
            />
          </CustomDivForTables>
        </DiaryPageContainer>
      </DiaryWrapper>
    </Container>
  );
};

export default Diary;
