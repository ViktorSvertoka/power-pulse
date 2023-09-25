import {
  ExerciseItemText,
  ExerciseItemTitle,
  ExercisesLi,
  Image,
  TitleContainer,
} from './ExercisesItem.styled';
import images from '../../../../images/0-default.jpg';
import { PropTypes } from 'prop-types';

export const ExercisesItem = ({
  exercisesItem,
  handleFilterClick,
  handleSetExName,
}) => {
  const { name, filter, imgURL } = exercisesItem;
  const onClick = name => {
    handleFilterClick('Waist');
    handleSetExName(name);
  };
  return (
    <ExercisesLi onClick={() => onClick(name)}>
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
