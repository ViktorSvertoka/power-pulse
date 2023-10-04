import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import like from '../../../images/like-2x.png';
import sprite from '../../../images/sprite.svg';
import {
  ArrowIcon,
  SuccessModalWindow,
  SuccessModalWindowBtn,
  SuccessModalWindowImg,
  SuccessModalWindowSpan,
  SuccessModalWindowText,
  SuccessModalWindowTitle,
  SuccessModalWindowWrap,
  SuccessModalWindowWrapImg,
} from './SuccessExerciseModalWindow.styled';
export const SuccessExerciseModalWindow = ({ data, closeModal }) => {
  console.log(data);
  return (
    <SuccessModalWindow>
      <SuccessModalWindowWrap>
        <SuccessModalWindowWrapImg>
          <SuccessModalWindowImg src={like} alt="Like" />
          <SuccessModalWindowTitle>Well done</SuccessModalWindowTitle>
          <SuccessModalWindowText>
            Time
            <SuccessModalWindowSpan>{data.time}</SuccessModalWindowSpan>
          </SuccessModalWindowText>
          <SuccessModalWindowText>
            Burned calories
            <SuccessModalWindowSpan>
              {data.burnedCalories}
            </SuccessModalWindowSpan>
          </SuccessModalWindowText>
        </SuccessModalWindowWrapImg>
        <Link to="/exercises" onClick={closeModal}>
          <SuccessModalWindowBtn>Next exercise</SuccessModalWindowBtn>
        </Link>
        <Link to="/diary" onClick={closeModal}>
          <SuccessModalWindowText>
            To the diary
            <ArrowIcon>
              <use href={sprite + '#icon-arrow-right'}> </use>
            </ArrowIcon>
          </SuccessModalWindowText>
        </Link>
      </SuccessModalWindowWrap>
    </SuccessModalWindow>
  );
};

SuccessExerciseModalWindow.propTypes = {
  burnedCalories: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};
