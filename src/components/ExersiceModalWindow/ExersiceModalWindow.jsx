import ExersiceModalWindowList from './ExersiceModalWindowList/ExersiceModalWindowList';

import {
  ExersiceModalWindowWrap,
  ExersiceModalContainer,
  ExersiceModalImgWrapper,
  ExersiceModalWindowBtn,
  BoxBtn,
  ExersiceModalImg,
  ExersiceModalTimer,
} from './ExersiceModalWindow.styles';
import Timer from '../Timer/Timer';
import { getUserParams } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addExercise } from '../../redux/diary/operations';
// const AddProductForm = ({ eldata, onClick, closeModal }) => {

const formatDate = date => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const ExersiceModalWindow = ({ data, onClick, closeModal }) => {
  const {
    bodyPart,
    equipment,
    burnedCalories,
    gifUrl,
    name,
    target,
    _id,
    time,
  } = data;

  const [dinamicBurnCal, setDinamicBurnCal] = useState(0);

  const dispatch = useDispatch();
  // const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getUserParams());
  }, [dispatch]);

  const amount = Math.round((burnedCalories / (time * 60)) * 180);
  // ;

  const savedDate = localStorage.getItem('selectedDate');
  let date = new Date(); // Default to current date

  if (savedDate) {
    const parsedDate = new Date(savedDate);
    if (!isNaN(parsedDate.getTime())) {
      date = parsedDate; // Use parsed date if valid
    }
  }

  const formattedDate = formatDate(date);

  const handleAddToDiary = () => {
    if (!amount) {
      toast.error('Must be greater than 0');
      return;
    }

    dispatch(
      addExercise({
        date: formattedDate, // Use the formatted date
        bodyPart,
        target,
        time,
        exerciseId: _id,
        equipment,
        name,
        burnedCalories: dinamicBurnCal,
      }),
    );
    onClick();
    // closeModal();
  };

  return (
    <ExersiceModalContainer>
      <ExersiceModalWindowWrap>
        <ExersiceModalImgWrapper>
          <ExersiceModalImg src={gifUrl} alt={name} />
        </ExersiceModalImgWrapper>
        <ExersiceModalTimer>
          <Timer
            data={data}
            setDinamicBurnCal={setDinamicBurnCal}
            dinamicBurnCal={dinamicBurnCal}
          />
        </ExersiceModalTimer>
        <ExersiceModalWindowList
          name={name}
          bodypart={bodyPart}
          target={target}
          equipment={equipment}
          time={time}
        />
        <BoxBtn>
          <ExersiceModalWindowBtn type="button" onClick={handleAddToDiary}>
            Add to diary
          </ExersiceModalWindowBtn>
        </BoxBtn>
      </ExersiceModalWindowWrap>
    </ExersiceModalContainer>
  );
};
