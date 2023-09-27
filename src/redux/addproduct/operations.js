import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const addDiaryProduct = createAsyncThunk(
  'addDiaryProduct',
  async (productDetails, { rejectWithValue }) => {
    try {
      const {
        title,
        productId,
        category,
        weight,
        amount,
        recommended,
        calories,
        date,
      } = productDetails;
      await axios.post('/diary/addproduct', {
        title,
        productId,
        category,
        weight,
        amount,
        recommended,
        calories,
        date,
      });

      console.log('addDiaryProduct');
      toast.success(`Product successfully added to diary!`);
      return;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);
