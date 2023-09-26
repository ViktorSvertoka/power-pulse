import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import avocado from '../../../../src/images/avocado-2x.png'
import sprite from '../../../../src/images/sprite.svg';


import { SuccessModalWindow, 
         SuccessModalWindowWrap,
         SuccessModalWindowWrapImg,
         SuccessModalWindowImg,
         SuccessModalWindowTitle,
         SuccessModalWindowText,
         SuccessModalWindowSpan,
         SuccessModalWindowBtn,
         ArrowIcon} from "./AddProductSuccess.styles";

export const AddProductSuccess = ({ calories, closeModal }) => {
  return (
    <SuccessModalWindow >
      <SuccessModalWindowWrap >
        <SuccessModalWindowWrapImg >
          <SuccessModalWindowImg
             src={avocado}
            alt="avocado"
          />
          <SuccessModalWindowTitle >Well done</SuccessModalWindowTitle>
          <SuccessModalWindowText>
            Calories:{" "}
            <SuccessModalWindowSpan >{calories}</SuccessModalWindowSpan>
          </SuccessModalWindowText>
        </SuccessModalWindowWrapImg>
        <Link to="/products" onClick={closeModal}>
          <SuccessModalWindowBtn >Next product</SuccessModalWindowBtn>
        </Link>
        <Link to="/diary" onClick={closeModal}>
          <SuccessModalWindowText>
            To the diary
            <ArrowIcon >
              <use href={sprite + "icon-arrow-right"}> </use>
            </ArrowIcon>
          </SuccessModalWindowText>
        </Link>
      </SuccessModalWindowWrap>
    </SuccessModalWindow>
  );
};

AddProductSuccess.propTypes = {
  calories: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};