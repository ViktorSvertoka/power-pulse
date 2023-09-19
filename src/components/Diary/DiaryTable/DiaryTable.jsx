import {
  RecommendCell,
  RecommendText,
  RecommendWrap,
  Svg,
  Table,
  Tbody,
  Td,
  Thead,
  Th,
  Tr,
} from './DiaryTable.styled';

import sprite from '../../../images/sprite.svg';

const DiaryTable = () => {
  const headings = ['Title', 'Category', 'Calories', 'Weight', 'Recommend', ''];
  const rows = Array(6).fill(null);
  const cells = Array(6).fill(null);

  return (
    <Table>
      <Thead>
        <Tr>
          {headings.map((heading, index) => (
            <Th key={index} index={index}>
              {heading}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {cells.map((cell, cellIndex) => {
              if (cellIndex === 4) {
                return (
                  <Td key={cellIndex} index={cellIndex}>
                    <RecommendWrap>
                      <RecommendCell></RecommendCell>
                      <RecommendText>Yes</RecommendText>
                    </RecommendWrap>
                  </Td>
                );
              }
              if (cellIndex === 5) {
                return (
                  <Td
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
                  </Td>
                );
              }

              return (
                <Td
                  key={cellIndex}
                  style={{
                    textOverflow: 'ellipsis',
                  }}
                  index={cellIndex}
                >
                  Произвольный текст
                </Td>
              );
            })}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default DiaryTable;
