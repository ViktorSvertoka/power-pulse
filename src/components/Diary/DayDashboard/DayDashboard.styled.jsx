import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const WrapWarning = styled.div`
  display: flex;
  margin-top: 48px;
  gap: 8px;
`;

const TextWarning = styled.span`
  width: 358px;
  flex-shrink: 0;
  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const GridItem = styled.div`
  width: 100%;
`;

export { Wrapper, Grid, GridItem, WrapWarning, TextWarning };
