import { ExercisesLi, Image } from './ExercisesItem.styled';
import images from '../../../../images/0-default.jpg';

export const ExercisesItem = () => {
  return (
    <ExercisesLi>
      <Image src={images} alt="image" />
    </ExercisesLi>
  );
};
