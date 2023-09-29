import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getDiaryList = createAsyncThunk(
  'getDiaryList',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/diary?date=${date}`);
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
      console.log('productDetailsAdd', productDetails);

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
    const { id, date } = productDetails;
    console.log('productDetailsDELETE', productDetails);

    try {
      await axios.delete(`/diary/deleteproduct?id=${id}&date=${date}`);

      return id;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);

export const addExercise = createAsyncThunk(
  'addExercise',
  async (exercise, thunkAPI) => {
    console.log('exercise', exercise);
    const {
      date,
      bodyPart,
      target,
      time,
      exerciseId,
      equipment,
      name,
      burnedCalories,
    } = exercise;
    try {
      const response = await axios.post('/diary/addexercise', {
        date,
        bodyPart,
        target,
        time,
        exerciseId,
        equipment,
        name,
        burnedCalories,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteExercise = createAsyncThunk(
  'deleteExercise',
  async (exerciseDetails, { rejectWithValue }) => {
    console.log('exerciseDetailsDELETE', exerciseDetails);
    try {
      const { id, date } = exerciseDetails;
      await axios.delete(`/diary/deleteexercise?date=${date}&id=${id}`);
      return id;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);
