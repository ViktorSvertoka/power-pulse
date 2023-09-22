import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBodyParts = createAsyncThunk(
  'exercises/fetchBodyParts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/exercises/bodyparts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchMuscules = createAsyncThunk(
  'exercises/fetchMuscules',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/exercises/muscules');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchEquipment = createAsyncThunk(
  'exercises/fetchEquipment',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/exercises/equipments');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addExercise = createAsyncThunk(
  'exercises/addExercise',
  async (exercise, thunkAPI) => {
    try {
      const response = await axios.post('/exercises', exercise);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteExercise = createAsyncThunk(
  'exercises/deleteExercise',
  async (exerciseId, thunkAPI) => {
    try {
      const response = await axios.delete(`/exercises/${exerciseId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
