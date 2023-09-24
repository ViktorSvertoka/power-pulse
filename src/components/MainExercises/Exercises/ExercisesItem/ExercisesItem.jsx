import {
  ExerciseItemText,
  ExerciseItemTitle,
  ExercisesLi,
  Image,
  TitleContainer,
} from './ExercisesItem.styled';
import images from '../../../../images/0-default.jpg';
import { PropTypes } from 'prop-types';

export const ExercisesItem = ({ exercisesItem }) => {
  const { name, filter, imgURL } = exercisesItem;
  return (
    <ExercisesLi>
      <Image src={imgURL ? imgURL : images} alt={name} />
      <TitleContainer>
        <ExerciseItemTitle>{name}</ExerciseItemTitle>
        <ExerciseItemText>{filter}</ExerciseItemText>
      </TitleContainer>
    </ExercisesLi>
  );
};

ExercisesItem.propTypes = {
  exercisesItem: PropTypes.object,
};
