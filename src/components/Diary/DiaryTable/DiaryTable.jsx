import React from 'react';
import {
  Heading,
  RecommendCell,
  RecommendText,
  RecommendWrap,
  Svg,
  Table,
  Tbody,
  Td,
  TdHead,
  Tr,
} from './DiaryTable.styled';

import sprite from '../../../images/sprite.svg';

const DiaryTable = () => {
  const headings = ['Title', 'Category', 'Calories', 'Weight', 'Recommend', ''];
  const rows = Array(6).fill(null);
  const cells = Array(6).fill(null);

  return (
    <Table>
      <Tbody>
        <Tr>
          {headings.map((heading, index) => (
            <TdHead key={index}>
              <Heading>{heading}</Heading>
            </TdHead>
          ))}
        </Tr>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {cells.map((cell, cellIndex) => {
              if (cellIndex === 4) {
                return (
                  <Td key={cellIndex}>
                    <RecommendWrap>
                      <RecommendCell></RecommendCell>
                      <RecommendText>Yes</RecommendText>
                    </RecommendWrap>
                  </Td>
                );
              }
              if (cellIndex === 5) {
                return (
                  <Td key={cellIndex} style={{ border: 'none' }}>
                    <Svg>
                      <use href={`${sprite}#icon-trash`} />
                    </Svg>
                  </Td>
                );
              }
              return <Td key={cellIndex}>Произвольный текст</Td>;
            })}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default DiaryTable;
