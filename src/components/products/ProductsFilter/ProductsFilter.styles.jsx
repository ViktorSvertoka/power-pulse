import styled from 'styled-components';

export const ProductsFilterLabel = styled.label`
  position: relative;
`;

export const ProductsFilterSearch = styled.input`
  /* background-color: inherit;
  width: 100%;
  

  padding: 14px;
  border-radius: 12px;
  top: calc(50% - 16px / 2);
  right: 14px; */
  width: 320px;
  background-color: transparent;
  color: var(--white-color);
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  font-size: 14px;
  @media screen and (min-width: 375px) {
    box-sizing: border-box;
    width: 335px;
    height: 46px;
    padding: 14px;
    padding-right: 68px;
    background-color: transparent;
    color: var(--white-color);
    font-size: 14px;
    line-height: 18px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
  }
  @media screen and (min-width: 768px) {
    width: 236px;

  }
  @media screen and (min-width: 1440px) {
    width: 236px;
    height: 52px;

    font-size: 16px;
    line-height: 24px;
  }

  &:hover,
  &:focus {
    outline: none;
    border-color: #e6533c;
  }

  &::placeholder {
    color: var(--white-color);
  }
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
  stroke: #e6533c;
  width: 18px;
  height: 18px;
`;
export const ProductsSvgSearch = styled.svg`
  stroke: #e6533c;
  width: 18px;
  height: 18px;
`;

export const ProductsFilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;
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
    width: 158px;
  }
  @media screen and (min-width: 768px) {
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
