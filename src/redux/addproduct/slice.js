import { createSlice } from '@reduxjs/toolkit';
import { addProduct } from './operations';

const contactsInitialValue = {
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFullfield = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, payload) => {
  state.isLoading = false;
  state.error = payload.error;
};

const products = createSlice({
  name: 'products',
  initialState: contactsInitialValue,
  extraReducers: builder => {
    builder.addCase(addProduct.pending, handlePending);
    builder.addCase(addProduct.fulfilled, handleFullfield);
    builder.addCase(addProduct.rejected, handleRejected);
  },
});

export const productsReducer = products.reducer;
