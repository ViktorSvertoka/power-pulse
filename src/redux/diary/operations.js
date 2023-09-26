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
      console.log('date', date);
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);

export const deleteProduct = createAsyncThunk(
  'deleteProduct',
  async (productDetails, { rejectWithValue }) => {
    const { productId, date } = productDetails;
    console.log('productId:', productId);
    console.log('date:', date);
    try {
      await axios.delete(
        `/diary/deleteproduct?productId=${productId}&date=${date}`,
      );
      return productId;
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
