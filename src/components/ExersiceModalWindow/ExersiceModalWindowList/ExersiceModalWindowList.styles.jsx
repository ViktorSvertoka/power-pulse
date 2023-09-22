import styled from 'styled-components';

export const ExersiceModalList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ExersiceModalLink = styled.li`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  padding: 12px 12px 12px 18px;
`;

export const ExersiceModalLinkSub = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

export const ExersiceModalLinkTitle = styled.p`
  color: var(--white-color);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;