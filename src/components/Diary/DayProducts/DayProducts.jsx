import React from 'react';
import Icon from '../../Icon/Icon';
import DiaryTable from '../DiaryTable/DiaryTable';
import {
  Wrapper,
  Title,
  AddBtn,
  DefaultText,
  WrapperTitleBtn,
} from './DayProducts.styled';

const DayProducts = () => {
  // Предположим, у вас есть какое-то условие для отображения DiaryTable
  const condition = true; // Измените на ваше условие

  return (
    <Wrapper>
      <WrapperTitleBtn>
        <Title>Products</Title>
        <AddBtn>
          Add product
          <Icon symbolId="icon-arrow-right" width="16" height="16" />
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
