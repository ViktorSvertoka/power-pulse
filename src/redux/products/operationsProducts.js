import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const productListThunk = createAsyncThunk(
  'products',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/products');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);