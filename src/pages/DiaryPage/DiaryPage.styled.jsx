import styled from 'styled-components';

const WrapperAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 96px 68px;
  background: #040404;
  width: 100%;
  min-height: 100vh;
  margin: 0;

  @media screen and (max-width: 1439px) {
    padding: 52px 0 64px;
  }
`;

const WrapTitleDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 52px 0 32px;
  width: 100%;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 704px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    max-width: 335px;
    padding: 40px 0;
  }

  @media screen and (max-width: 374px) {
  }
`;

const WrapDashboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  width: 100%;

  @media screen and (max-width: 1439px) {
    flex-direction: column;
    gap: 82px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

const DiaryTitle = styled.h2`
  margin: 20px 0;
  line-height: 44px;
  font-size: 32px;

  @media screen and (min-width: 374px) and (max-width: 767px) {
    margin: 0;
    font-size: 24px;
    line-height: 1.1;
  }
`;

export { WrapperAll, DiaryTitle, WrapTitleDate, WrapDashboard };
