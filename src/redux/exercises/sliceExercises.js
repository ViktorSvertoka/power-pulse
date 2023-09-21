import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import {
  fetchExercises,
  addExercise,
  deleteExercise,
} from './operationsExercises';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchExercises.pending, handlePending)
      .addCase(fetchExercises.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchExercises.rejected, handleRejected)
      .addCase(addExercise.pending, handlePending)
      .addCase(addExercise.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...items, action.payload];
      })
      .addCase(addExercise.rejected, handleRejected)
      .addCase(deleteExercise.pending, handlePending)
      .addCase(deleteExercise.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteExercise.rejected, handleRejected),
  //   extraReducers: {
  //     [fetchExercises.pending]: handlePending,
  //     [addExercise.pending]: handlePending,
  //     [deleteExercise.pending]: handlePending,
  //     [fetchExercises.rejected]: handleRejected,
  //     [addExercise.rejected]: handleRejected,
  //     [deleteExercise.rejected]: handleRejected,
  //     [fetchExercises.fulfilled](state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items = action.payload;
  //     },
  //     [addExercise.fulfilled](state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items.push(action.payload);
  //     },
  //     [deleteExercise.fulfilled](state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       const index = state.items.findIndex(
  //         task => task.id === action.payload.id,
  //       );
  //       state.items.splice(index, 1);
  //     },
  //     [logOut.fulfilled](state) {
  //       state.items = [];
  //       state.error = null;
  //       state.isLoading = false;
  //     },
  //   },
});

export const exercisesReducer = exercisesSlice.reducer;
