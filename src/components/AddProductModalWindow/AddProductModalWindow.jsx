import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDiaryProduct } from '../../redux/diary/operations';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { getUserParams } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import {
  BtnAdd,
  BtnCancel,
  BtnWrapper,
  CaloriesSpan,
  CaloriesTitle,
  Form,
  InputQuontity,
  InputTitle,
  InputWrapper,
  ModalWrapper,
} from './AddProductModalWindow.styles';

const formatDate = date => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const AddProductForm = ({ eldata, onClick, closeModal }) => {
  const dispatch = useDispatch();
  const { title, calories, category, weight, _id: productId } = eldata;
  const [quantity, setQuantity] = useState(0);

  const data = useSelector(selectUser);
  const bloodType = data.blood;

  useEffect(() => {
    dispatch(getUserParams());
  }, [dispatch]);

  const amount = Math.round((quantity * calories) / 100);

  const savedDate = localStorage.getItem('selectedDate');
  let date = new Date(); // Default to current date

  if (savedDate) {
    const parsedDate = new Date(savedDate);
    if (!isNaN(parsedDate.getTime())) {
      date = parsedDate; // Use parsed date if valid
    }
  }

  const formattedDate = formatDate(date);

  const handleAddToDiary = () => {
    if (!amount) {
      toast.error('Must be greater than 0');
      return;
    }

    dispatch(
      addDiaryProduct({
        date: formattedDate, // Use the formatted date
        title,
        productId,
        category,
        weight,
        amount: quantity,
        recommended: eldata.groupBloodNotAllowed[bloodType],
        calories,
      }),
    )
      .then(() => {
        onClick(amount);
      })
      .catch(error => {
        toast(error.message);
      });
  };

  return (
    <ModalWrapper>
      <Form>
        <InputWrapper>
          <label>
            <InputTitle type="text" value={title} disabled />
          </label>
          <label>
            <InputQuontity
              placeholder="grams"
              value={quantity}
              type="number"
              onChange={e => setQuantity(e.target.value)}
            />
          </label>
        </InputWrapper>
        <br />
        <p>
          <CaloriesSpan>
            <CaloriesTitle>Calories:</CaloriesTitle>
            {amount}
          </CaloriesSpan>
        </p>
        <br />
        <BtnWrapper>
          <BtnAdd type="button" onClick={handleAddToDiary}>
            Add to diary
          </BtnAdd>
          <BtnCancel type="button" onClick={closeModal}>
            Cancel
          </BtnCancel>
        </BtnWrapper>
      </Form>
    </ModalWrapper>
  );
};

AddProductForm.propTypes = {
  eldata: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default AddProductForm;
