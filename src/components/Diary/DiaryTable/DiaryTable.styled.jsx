import styled from 'styled-components';

const Table = styled.table`
  display: flex;
  max-height: 164px;
  max-width: 100%;
  overflow-x: hidden;
  margin: 16px;
  border-radius: 12px;
`;

const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const Tr = styled.tr`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #efede8;
`;

const Td = styled.td`
  height: 40px;
  align-items: center;
  border-radius: 12px;
  padding: 8px 14px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  color: #efede8;
  white-space: nowrap;

  overflow: hidden;
  font-family: 'RobotoRegular';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`;

const TdHead = styled.td`
  width: 100%;
`;

const Heading = styled.div`
  color: #ef8964;
  font-family: 'RobotoRegular';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  border: none;
`;

const RecommendWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
`;

const RecommendCell = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background: #419b09;
`;

const RecommendText = styled.span`
  font-family: 'RobotoRegular';
  font-size: 16px;
  line-height: 1.5;
  color: #efede8;
`;

const Svg = styled.svg`
  width: 20px;
  height: 20px;
  fill: #ffffff;
  stroke: #ffffff;
`;

export {
  Table,
  Tbody,
  Tr,
  Td,
  Heading,
  TdHead,
  RecommendCell,
  RecommendText,
  RecommendWrap,
  Svg,
};
