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
import CustomLoader from '../../components/Loader/Loader';

const Diary = () => {
  const [formatDate, setFormatDate] = useState('');
  const productsList = useSelector(getDiaryProducts);
  const exercisesList = useSelector(getDiaryExercises);
  const isLoadingDairy = useSelector(getIsLoadingDiary);

  const dispatch = useDispatch();

  const handleSelectedDateChange = async formattedDate => {
    if (formattedDate) {
      await setFormatDate(formattedDate);
      dispatch(getDiaryList(formattedDate));
    }
  };

  useEffect(() => {
    if (!formatDate) {
      const date = new Date();
      const formattedDate = `${String(date.getDate()).padStart(
        2,
        '0',
      )}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
      setFormatDate(formattedDate);
    }

    dispatch(getDiaryList(formatDate));
  }, [dispatch, formatDate]);

  return (
    <Container>
      {isLoadingDairy ? (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <CustomLoader
            height={50}
            width={50}
            color="#E6533C"
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
            z-index={9999}
          />
        </div>
      ) : (
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
                  help me be aware of my nutrition and make me responsible for
                  my choices.
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
      )}
    </Container>
  );
};

export default Diary;
