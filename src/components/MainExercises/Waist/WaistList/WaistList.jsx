import { useDispatch, useSelector } from 'react-redux';
import { WaistItem } from '../WaistItem/WaistItem';
import {
  WaistItemUl,
  NoExercisesTitle,
  WaistListContainer,
  ImgWaist,
} from './WaistList.styled';
import {
  selectBodyParts,
  selectExercises,
} from '../../../../redux/exercises/selectorsExercises';
import { useEffect } from 'react';
import { fetchExercises } from '../../../../redux/exercises/operationsExercises';
import images from '../../../../images/waist-1x.jpg';
import { useState } from 'react';
import BasicModalWindow from '../../../BasicModalWindow/BasicModalWindow';
import { ExersiceModalWindow } from '../../../ExersiceModalWindow/ExersiceModalWindow';

const filterProducts = (listProducts, filter) => {
  const { category, recommended } = filter;
  const search = filter.search ? filter.search.toLowerCase() : undefined;

  const stepOne = category
    ? listProducts.filter(el => el.category === category)
    : listProducts;
  const stepTwo =
    recommended === 'recommended'
      ? stepOne.filter(el => el.recommended)
      : recommended === 'notRecommended'
      ? stepOne.filter(el => !el.recommended)
      : stepOne;
  const stepThree = search
    ? stepTwo.filter(el => el.title.toLowerCase().includes(search))
    : stepTwo;

  return stepThree;
};

export const WaistList = ({ exerciseName }) => {
  const [modalData, setModalData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  const openModalToggle = el => {
    setModalData(el);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const exercises = useSelector(selectExercises);
  const visibleExercises = exercises.filter(
    exercise =>
      exercise.bodyPart ||
      exercise.target ||
      exercise.equipment === exerciseName,
  );
  return (
    <>
      {modalData && (
        <BasicModalWindow isOpenModalToggle={closeModal}>
          {modalData.gifUrl ? (
            <ExersiceModalWindow data={modalData} onClick={openModalToggle} />
          ) : (
            <SuccessExerciseModalWindow
              closeModal={closeModal}
              data={modalData}
              onClick={closeModal}
            />
          )}
        </BasicModalWindow>
      )}
      <WaistListContainer>
        <WaistItemUl>
          {visibleExercises.length ? (
            visibleExercises
              .slice(0, 50)
              .map(el => (
                <WaistItem
                  key={el._id}
                  data={el}
                  openModalToggle={openModalToggle}
                />
              ))
          ) : (
            <NoExercisesTitle>
              There is not exercises downloaded else, plaese try choose this
              categorie later!!!
            </NoExercisesTitle>
          )}
        </WaistItemUl>
        <ImgWaist src={images} alt="image" />
      </WaistListContainer>
    </>
  );
};
