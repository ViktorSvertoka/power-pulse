import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const addDiaryProduct = createAsyncThunk(
  'addDiaryProduct',
  async (productDetails, { rejectWithValue }) => {
    try {
      const { productId, date, calories, category, recommended, title } =
        productDetails;
      await axios.post('/diary/addproduct', {
        date,
        productId,
        calories,
        category,
        recommended,
        title,
      });

      toast.success(`Product ${title} successfully added to diary!`);
      return;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);
