import { Container } from '../../styles/container';
import {
  ExercisesTitle,
  ExercisesItem,
  Wrap,
  ExercisesNavList,
  ImageList,
  Image,
  ImageItem,
} from './ExercisesPage.styled';

const ExercisesPage = () => {
  return (
    <Container>
      <Wrap>
        <ExercisesTitle>Exercises</ExercisesTitle>
        <ExercisesNavList>
          <ExercisesItem>Body parts</ExercisesItem>
          <ExercisesItem>Muscules</ExercisesItem>
          <ExercisesItem>Equipment</ExercisesItem>
        </ExercisesNavList>
      </Wrap>
      <ImageList>
        <ImageItem>
          <Image src="/src/images/0-default.jpg" alt="image" />
        </ImageItem>
        <ImageItem>
          <Image src="/src/images/0-default.jpg" alt="image" />
        </ImageItem>
        <ImageItem>
          <Image src="/src/images/0-default.jpg" alt="image" />
        </ImageItem>
        <ImageItem>
          <Image src="/src/images/0-default.jpg" alt="image" />
        </ImageItem>
        <ImageItem>
          <Image src="/src/images/0-default.jpg" alt="image" />
        </ImageItem>
        <ImageItem>
          <Image src="/src/images/0-default.jpg" alt="image" />
        </ImageItem>
        <ImageItem>
          <Image src="/src/images/0-default.jpg" alt="image" />
        </ImageItem>
        <ImageItem>
          <Image src="/src/images/0-default.jpg" alt="image" />
        </ImageItem>
        <ImageItem>
          <Image src="/src/images/0-default.jpg" alt="image" />
        </ImageItem>
        <ImageItem>
          <Image src="/src/images/0-default.jpg" alt="image" />
        </ImageItem>
      </ImageList>
    </Container>
  );
};

export default ExercisesPage;
