import Icon from '../../Icon/Icon';
import DiaryTable from '../DiaryTable/DiaryTable';
import {
  Wrapper,
  Title,
  AddBtn,
  DefaultText,
  WrapperTitleBtn,
  Svg,
} from './DayProducts.styled';
import sprite from '../../../images/sprite.svg';

const DayProducts = () => {
  const condition = true;

  return (
    <Wrapper>
      <WrapperTitleBtn>
        <Title>Products</Title>
        <AddBtn>
          Add product
          <Svg>
            <use href={`${sprite}#icon-arrow-right`} />
          </Svg>
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

export default DayProducts;
