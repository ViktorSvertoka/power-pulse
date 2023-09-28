import React from 'react';
import PropTypes from 'prop-types';
import {
  DayDiaryContainer,
  DayDiarySubTitle,
  AddLink,
  DayNoContentText,
  ArrowRight,
  DayDiarySubDiv,
} from './DiaryProductsItemOrExercisesItem.styled';
import sprite from '../../images/sprite.svg';
import DiaryTable from '../DiaryTable/DiaryTable';
import DiaryTableOnMobile from '../DiaryTableMob/DiaryTableMob';
import { useDispatch } from 'react-redux';
import { deleteExercise, deleteProduct } from '../../redux/diary/operations';

const formatDate = date => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const DiaryProductsItemOrExercisesItem = ({
  to,
  marginBottom,
  list,
  productTable,
  exerciseTable,
}) => {
  const dispatch = useDispatch();

  const savedDate = localStorage.getItem('selectedDate');
  let date = new Date(); // Default to current date

  if (savedDate) {
    const parsedDate = new Date(savedDate);
    if (!isNaN(parsedDate.getTime())) {
      date = parsedDate; // Use parsed date if valid
    }
  }

  const formattedDate = formatDate(date);

  const handleAddLinkClick = () => {
    localStorage.setItem('selectedDate', date.toISOString());
  };

  const handleDelete = ({ id }) => {
    if (productTable) {
      dispatch(deleteProduct({ id }));
    }
    if (exerciseTable) {
      dispatch(deleteExercise({ exerciseId: id, date: formattedDate }));
    }
  };

  return (
    <DayDiaryContainer marginBottom={marginBottom}>
      <DayDiarySubDiv>
        <DayDiarySubTitle>
          {productTable ? 'Products' : 'Exercises'}
        </DayDiarySubTitle>
        <AddLink to={to} onClick={handleAddLinkClick}>
          Add {productTable ? 'product' : 'exercise'}
          <ArrowRight>
            <use href={sprite + `#icon-arrow-right`}></use>
          </ArrowRight>
        </AddLink>
      </DayDiarySubDiv>
      {list && list.length !== undefined && list.length !== 0 ? (
        <>
          <DiaryTable
            key={list}
            list={list}
            productTable={productTable}
            exerciseTable={exerciseTable}
            onDelete={handleDelete}
            date={formattedDate}
          />
          <DiaryTableOnMobile
            list={list}
            productTable={productTable}
            exerciseTable={exerciseTable}
            onDelete={handleDelete}
            date={formattedDate}
          />
        </>
      ) : (
        <DayNoContentText>
          Not found {productTable ? 'products' : 'exercises'}
        </DayNoContentText>
      )}
    </DayDiaryContainer>
  );
};

DiaryProductsItemOrExercisesItem.propTypes = {
  to: PropTypes.string,
  marginBottom: PropTypes.number,
  list: PropTypes.array,
  productTable: PropTypes.bool,
  exerciseTable: PropTypes.bool,
};

export default DiaryProductsItemOrExercisesItem;
