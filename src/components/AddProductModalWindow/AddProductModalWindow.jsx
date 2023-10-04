import { useState, useEffect } from 'react';
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
  WeightLabel,
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
  const [quantity, setQuantity] = useState(1);

  const data = useSelector(selectUser);
  const bloodType = data.blood;

  useEffect(() => {
    dispatch(getUserParams());
  }, [dispatch]);

  const amount = Math.round((quantity * calories) / 100);

  let date = new Date();

  const formattedDate = formatDate(date);

  const handleAddToDiary = () => {
    if (!amount) {
      toast.error('Must be greater than 0');
      return;
    }
    console.log('formattedDate', formattedDate);
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
          <label style={{ position: 'relative' }}>
            <InputQuontity
              value={quantity}
              type="number"
              min={1}
              onChange={e => setQuantity(e.target.value)}
            />
            <WeightLabel>weight</WeightLabel>
          </label>
        </InputWrapper>
        <br />
        <CaloriesTitle>
          <CaloriesTitle>
            Calories: <CaloriesSpan>{amount}</CaloriesSpan>
          </CaloriesTitle>
        </CaloriesTitle>
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
