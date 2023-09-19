import sprite from '../../images/sprite.svg';
import { Wrappper, WrapperMark, Text } from './ExclamationMark.styled';

const ExclamationMark = () => {
  return (
    <Wrappper>
      <WrapperMark>
        <svg width="24" height="24">
          <use href={`${sprite}#icon-attention`}></use>
        </svg>
      </WrapperMark>
      <Text>
        We understand that each individual is unique, so the entire approach to
        diet is relative and tailored to your unique body and goals.
      </Text>
    </Wrappper>
  );
};

export default ExclamationMark;
