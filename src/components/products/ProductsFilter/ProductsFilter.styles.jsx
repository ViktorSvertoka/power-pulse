import styled from 'styled-components';


export const ProductsFilterLabel = styled.label`
  position: relative;
`;

export const ProductsFilterSearch = styled.input`
  top: calc(50% - 16px / 2);
  right: 14px;
`;

export const ProductsBtnClouse = styled.button`
  background: transparent;
  position: absolute;
  top: calc(50% - 16px / 2);
  right: 40px;
`;
export const ProductsBtnSearch = styled.button`
  background: transparent;
  position: absolute;
  top: calc(50% - 16px / 2);
  right: 14px;
`;

export const ProductsSvgClouse = styled.svg`
  fill: #e6533c;
  width: 32px;
  height: 32px;
`;
export const ProductsSvgSearch = styled.svg`
  fill: #e6533c;
  width: 32px;
  height: 32px;
`;

export const ProductsFilterList = styled.ul`
  @media screen and (min-width: 375px) {
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 28px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    justify-content: flex-end;
  }
`;

export const SelectWrapper = styled.div`
  @media screen and (min-width: 375px) {
    width: 173px;
  }
  @media screen and (min-width: 1440px) {
    width: 192px;
  }
`;

// // export const ProductsFilterSelect = styled.Select`
// @media screen and (min-width: 375px) {
//   width: 173px;
// }
//   @media screen and (min-width: 1440px) {
//     width: 192px;
// //   }`;
