import React from 'react';
import {
  RecommendCell,
  RecommendText,
  RecommendWrap,
  Svg,
  Table,
  Tbody,
  Th,
  Tr,
  Heading,
} from './DiaryTable.styled';
import sprite from '../../../images/sprite.svg';

const headings = ['Title', 'Category', 'Calories', 'Weight', 'Recommend', ''];

const DiaryTable = () => {
  const rows = Array(6).fill(null);
  const cells = Array(6).fill(null);

  return (
    <Table>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {cells.map((cell, cellIndex) => {
              if (cellIndex === 4) {
                return (
                  <Th key={cellIndex} index={cellIndex}>
                    <Heading>{headings[cellIndex]}</Heading>

                    <RecommendWrap>
                      <RecommendCell></RecommendCell>
                      <RecommendText>Yes</RecommendText>
                    </RecommendWrap>
                  </Th>
                );
              }

              if (cellIndex === 5) {
                return (
                  <Th
                    key={cellIndex}
                    style={{
                      border: 'none',
                      textOverflow: 'none',
                      whiteSpace: 'nowrap',
                      padding: '0',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    index={cellIndex}
                  >
                    <Svg index={cellIndex}>
                      <use href={`${sprite}#icon-trash`} />
                    </Svg>
                  </Th>
                );
              }

              return (
                <Th
                  key={cellIndex}
                  style={{
                    textOverflow: 'ellipsis',
                  }}
                  index={cellIndex}
                >
                  <Heading>{headings[cellIndex]}</Heading>Default text
                </Th>
              );
            })}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default DiaryTable;
