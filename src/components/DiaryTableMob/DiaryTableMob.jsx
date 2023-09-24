import PropTypes from 'prop-types';

import sprite from '../../images/sprite.svg';

import { DeleteBtn, DeleteIcon } from '../DiaryTable/DiaryTable.styled';
import {
  BottomContainer,
  Cell,
  CellValue,
  ContainerForTable,
  CustomContainer,
} from './DiaryTableMob.styled';

const DiaryTableOnMobile = ({
  list,
  productTable,
  exerciseTable,
  onDelete,
  date,
}) => {
  return (
    <>
      {productTable && (
        <CustomContainer>
          {list.map(item => (
            <ContainerForTable key={item._id}>
              <Cell>
                Title<CellValue>{item.title}</CellValue>
              </Cell>

              <Cell>
                Category<CellValue>{item.category}</CellValue>
              </Cell>

              <BottomContainer>
                <Cell>
                  Calories
                  <CellValue>{item.calories}</CellValue>
                </Cell>

                <Cell>
                  Weight <CellValue>{item.amount}</CellValue>
                </Cell>

                <Cell>
                  Recommend
                  <CellValue before colorBefore={item.recommend}>
                    {item.recommend ? 'Yes' : 'No'}
                  </CellValue>
                </Cell>

                <Cell>
                  <CellValue>
                    <DeleteBtn onClick={() => onDelete({ date, id: item._id })}>
                      <DeleteIcon>
                        <use href={sprite + `#icon-trash`}></use>
                      </DeleteIcon>
                    </DeleteBtn>
                  </CellValue>
                </Cell>
              </BottomContainer>
            </ContainerForTable>
          ))}
        </CustomContainer>
      )}

      {exerciseTable && (
        <CustomContainer>
          {list.map(item => (
            <ContainerForTable key={item._id}>
              <Cell>
                Body Part<CellValue>{item.bodyPart}</CellValue>
              </Cell>

              <Cell>
                Equipment<CellValue>{item.equipment}</CellValue>
              </Cell>

              <Cell>
                Name<CellValue>{item.name}</CellValue>
              </Cell>

              <BottomContainer>
                <Cell>
                  Target <CellValue>{item.target}</CellValue>
                </Cell>

                <Cell>
                  Burned Calor..
                  <CellValue>{item.burnedCalories}</CellValue>
                </Cell>

                <Cell>
                  Time <CellValue>{item.time}</CellValue>
                </Cell>

                <Cell>
                  {' '}
                  <CellValue>
                    <DeleteBtn onClick={() => onDelete({ date, id: item._id })}>
                      <DeleteIcon>
                        <use href={sprite + `#icon-trash`}></use>
                      </DeleteIcon>
                    </DeleteBtn>
                  </CellValue>
                </Cell>
              </BottomContainer>
            </ContainerForTable>
          ))}
        </CustomContainer>
      )}
    </>
  );
};

DiaryTableOnMobile.propTypes = {
  list: PropTypes.array,
  productTable: PropTypes.bool,
  exerciseTable: PropTypes.bool,
  onDelete: PropTypes.func,
  date: PropTypes.string,
};

export default DiaryTableOnMobile;
