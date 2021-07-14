import { createSlice } from '@reduxjs/toolkit';
import uniqueId from 'lodash/uniqueId';

const initialState = [];

const addToast = (state, action) => {
  state.push(action.payload.message);
};

const removeToast = (state, action) => state.filter((message) => message.id !== action.payload.id);

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast,
    removeToast,
  },
});

const createToast = (data) => (dispatch) => {
  const id = uniqueId('toast_');

  dispatch(addToast({ message: { id, ...data } }));
  setTimeout(() => dispatch(removeToast({ id })), 3000);
};

const success = (text) => (dispatch) => {
  dispatch(createToast({ type: 'success', text }));
};

const info = (text) => (dispatch) => {
  dispatch(createToast({ type: 'info', text }));
};

const error = (text) => (dispatch) => {
  dispatch(createToast({ type: 'error', text }));
};

export const selectMessages = ({ toast }) => toast;

const toastSelectors = {
  selectMessages,
};

const toastActions = {
  success,
  info,
  error,
};

const toastReducer = toastSlice.reducer;

export {
  toastSelectors,
  toastActions,
  toastReducer,
};
