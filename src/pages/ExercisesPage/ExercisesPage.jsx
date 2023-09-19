import { Container } from '../../styles/container';
import images from '../../images/0-default.jpg';
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
          <Image src={images} alt="image" />
        </ImageItem>
         <ImageItem>
          <Image src={images} alt="image" />
        </ImageItem>
         <ImageItem>
          <Image src={images} alt="image" />
        </ImageItem>
         <ImageItem>
          <Image src={images} alt="image" />
        </ImageItem>
         <ImageItem>
          <Image src={images} alt="image" />
        </ImageItem>
         <ImageItem>
          <Image src={images} alt="image" />
        </ImageItem>
         <ImageItem>
          <Image src={images} alt="image" />
        </ImageItem>
         <ImageItem>
          <Image src={images} alt="image" />
        </ImageItem>
         <ImageItem>
          <Image src={images} alt="image" />
        </ImageItem>
         <ImageItem>
          <Image src={images} alt="image" />
        </ImageItem>
              
      </ImageList>
    </Container>
  );
};

export default ExercisesPage;
