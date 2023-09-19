import styled from 'styled-components';

const Table = styled.table`
  display: flex;
  flex-direction: column;
  max-height: 164px;
  max-width: 100%;
  overflow-x: hidden;
  margin: 16px;
  border-radius: 12px;
`;

const Thead = styled.thead`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
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
`;

const Th = styled.th`
  flex: 0 0 auto;
  width: ${props => {
    if (props.index === 0) return '212px';
    if (props.index === 1) return '166px';
    if (props.index === 2 || props.index === 3) return '105px';
    if (props.index === 4) return '110px';
    return 'auto';
  }};
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ef8964;
  font-family: 'RobotoRegular';
  font-size: 12px;
  line-height: 1.5;
`;

const Td = styled.td`
  flex: 0 0 auto;
  width: ${props => {
    if (props.index === 0) return '212px';
    if (props.index === 1) return '166px';
    if (props.index === 2 || props.index === 3) return '105px';
    if (props.index === 4) return '110px';
    return 'auto';
  }};
  height: ${props => (props.index === 5 ? '40px' : 'auto')};
  align-items: center;
  border-radius: 12px;
  padding: 8px 14px;
  border: ${props =>
    props.index === 5 ? 'none' : '1px solid rgba(239, 237, 232, 0.3)'};
  color: #efede8;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'RobotoRegular';
  font-size: ${props => (props.index === 4 ? '16px' : '14px')};
  font-weight: ${props => (props.index === 4 ? '700' : '400')};
  line-height: 1.5;
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
  width: ${props => (props.index === 5 ? '20px' : 'auto')};
  height: ${props => (props.index === 5 ? '20px' : 'auto')};
  fill: #ffffff;
  stroke: #ffffff;
`;

export {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  RecommendCell,
  RecommendText,
  RecommendWrap,
  Svg,
};
