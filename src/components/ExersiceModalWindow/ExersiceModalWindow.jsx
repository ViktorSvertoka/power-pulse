import ExersiceModalWindowList from './ExersiceModalWindowList/ExersiceModalWindowList'

import { ExersiceModalWindowWrap, ExersiceModalContainer, ExersiceModalImgWrapper, ExersiceModalWindowBtn, BoxBtn, ExersiceModalImg, ExersiceModalTimer } from "./ExersiceModalWindow.styles";
import Timer from '../Timer/Timer';

export const ExersiceModalWindow = () => {

 

  

  return (
    <ExersiceModalContainer >
      <ExersiceModalWindowWrap >
        <ExersiceModalImgWrapper >
          <ExersiceModalImg
          src="https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0001.gif"
            alt="exercise"
          />
        </ExersiceModalImgWrapper>
        <ExersiceModalTimer >
          <ExersiceModalWindowList
            name="air bike"
            bodypart="waist"
            target= "abc"
            equipment="body weit"
            time= "3 minutes"
          />
          <Timer/>
        </ExersiceModalTimer>
        <BoxBtn >
          <ExersiceModalWindowBtn  type="button">
            Add to diary
          </ExersiceModalWindowBtn>
        </BoxBtn>
      </ExersiceModalWindowWrap>
    </ExersiceModalContainer>
  );
};