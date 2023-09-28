import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getDiaryList = createAsyncThunk(
  'getDiaryList',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/diary/getproduct', {
        params: { date },
      });
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);

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
      console.log('productDetailsAdd', recommended, date);

      toast.success(`Product successfully added to diary!`);
      return;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);

export const deleteProduct = createAsyncThunk(
  'deleteProduct',
  async (productDetails, { rejectWithValue }) => {
    const { id } = productDetails;
    console.log('productDetailsDELETE', productDetails);

    try {
      await axios.delete('/diary/deleteproduct', { data: { id } });

      return id;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);

export const deleteExercise = createAsyncThunk(
  'deleteExercise',
  async (exerciseDetails, { rejectWithValue }) => {
    try {
      const { exerciseId, date } = exerciseDetails;
      await axios.delete(
        `/api/diary/delete-exercise?date=${date}&exerciseId=${exerciseId}`,
      );
      return exerciseId;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);
