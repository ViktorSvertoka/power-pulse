import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const productListThunk = createAsyncThunk(
  'products',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/products');
      console.log(res.data)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);