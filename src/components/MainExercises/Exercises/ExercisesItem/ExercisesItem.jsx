import {
  ExerciseItemText,
  ExerciseItemTitle,
  ExercisesLi,
  Image,
  TitleContainer,
} from './ExercisesItem.styled';
// import images from '../../../../images/0-default.jpg';
import { PropTypes } from 'prop-types';

export const ExercisesItem = ({ bodyPartItem }) => {
  const { name, filter, imgURL } = bodyPartItem;
  return (
    <ExercisesLi>
      <Image src={imgURL} alt="image" />
      <TitleContainer>
        <ExerciseItemTitle>{name}</ExerciseItemTitle>
        <ExerciseItemText>{filter}</ExerciseItemText>
      </TitleContainer>
    </ExercisesLi>
  );
};

ExercisesItem.propTypes = {
  bodyPartItem: PropTypes.object,
};

// filter: 'Body parts';
// imgURL: 'https://res.cloudinary.com/dn4iogcf4/image/upload/v1694469564/categories/shoulders_deqz9d.jpg';
// name: 'shoulders';
// _id: '6509875f502455678718dcef';
