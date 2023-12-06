import {configureStore} from '@reduxjs/toolkit';
import tabSlice from './Slices/tabSlice';
import rangeSlice from './Slices/rangeSlice';
import formSlice from './Slices/formSlice';

export const store = configureStore({
  reducer: {
    tab: tabSlice,
    range: rangeSlice,
    form: formSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
