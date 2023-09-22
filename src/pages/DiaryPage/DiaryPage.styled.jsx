import styled from 'styled-components';

export const DiaryWrapper = styled.div`
  padding: 40px 20px 80px 20px;
  @media screen and (min-width: 768px) {
    padding: 72px 32px 64px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 96px 68px 96px;
  }
`;

export const DiaryPageContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CustomDivForCards = styled.div`
  width: auto;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
    order: 1;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;

export const CustomDivForTables = styled.div`
  width: auto;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
  }
`;
