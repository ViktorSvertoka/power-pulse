import ExersiceModalWindowList from './ExersiceModalWindowList/ExersiceModalWindowList';
import { PropTypes } from 'prop-types';

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

export const ExersiceModalWindow = ({ data }) => {
  const { bodyPart, equipment, gifUrl, name, target, time } = data;

  return (
    <ExersiceModalContainer>
      <ExersiceModalWindowWrap>
        <ExersiceModalImgWrapper>
          <ExersiceModalImg src={gifUrl} alt={name} />
        </ExersiceModalImgWrapper>
        <ExersiceModalTimer>
          <Timer data={data} />
        </ExersiceModalTimer>
        <ExersiceModalWindowList
          name={name}
          bodypart={bodyPart}
          target={target}
          equipment={equipment}
          time={time}
        />
        <BoxBtn>
          <ExersiceModalWindowBtn type="button">
            Add to diary
          </ExersiceModalWindowBtn>
        </BoxBtn>
      </ExersiceModalWindowWrap>
    </ExersiceModalContainer>
  );
};
