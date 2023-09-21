import sprite from '../../../images/sprite.svg';

import {
  Wrapper,
  Title,
  AddBtn,
  DefaultText,
  WrapperTitleBtn,
} from '../DayProducts/DayProducts.styled';
import { Svg } from '../DaySwitch/DaySwitch.styled';
import DiaryTable from '../DiaryTable/DiaryTable';

const DayExercises = () => {
  const condition = true;
  return (
    <Wrapper>
      <WrapperTitleBtn>
        <Title>Exercises</Title>
        <AddBtn>
          Add product
          <Svg>
            <use href={`${sprite}#icon-arrow-right`} />
          </Svg>{' '}
        </AddBtn>
      </WrapperTitleBtn>
      {condition ? (
        <DiaryTable />
      ) : (
        <DefaultText>Not found products</DefaultText>
      )}
    </Wrapper>
  );
};

export default DayExercises;
