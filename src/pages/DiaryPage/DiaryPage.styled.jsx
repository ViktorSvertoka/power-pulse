import styled from 'styled-components';

const WrapperAll = styled.div`
  display: flex;
  flex-direction: column;
  padding: 52px 96px 68px;
  background: #040404;
  width: 1440px;
  min-height: 100vh;
`;

const WrapTitleDate = styled.div`
  display: flex;
  padding: 0;
`;

const DiaryTitle = styled.h2`
  margin: 72px auto 32px 0;
  line-height: 44px;
  font-size: 32px;
`;

export { WrapperAll, DiaryTitle, WrapTitleDate };
