import {configureStore} from '@reduxjs/toolkit';
import tabSlice from './Slices/tabSlice';
import rangeSlice from './Slices/rangeSlice';
import formSlice from './Slices/formSlice';
import timerSlice from './Slices/timerSlice';

export const store = configureStore({
  reducer: {
    tab: tabSlice,
    range: rangeSlice,
    form: formSlice,
    timer: timerSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
