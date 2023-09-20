import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 826px;
  height: auto;
  gap: 32px;

  @media screen and (min-width: 768) and (max-width: 1439px) {
    min-width: 704px;
    margin-right: 0;
  }

  @media screen and (min-width: 375) and (max-width: 767px) {
    max-width: 179px;
    margin-right: 0;
  }
`;

export { Wrapper };
