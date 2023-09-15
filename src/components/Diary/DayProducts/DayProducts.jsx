import Icon from '../../Icon/Icon';
import {
  Wrapper,
  Title,
  AddBtn,
  DefaultText,
  WrapperTitleBtn,
} from './DayProducts.styled';

const DayProducts = () => {
  return (
    <Wrapper>
      <WrapperTitleBtn>
        <Title>Products</Title>
        <AddBtn>
          Add product
          <Icon symbolId="icon-arrow-right" width="16" height="16" />
        </AddBtn>
      </WrapperTitleBtn>

      <DefaultText>Not found products</DefaultText>
    </Wrapper>
  );
};

export default DayProducts;
