import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface IState {
  range: number;
}

const initialState: IState = {
  range: 400,
};

const rangeSlice = createSlice({
  name: 'range',
  initialState,
  reducers: {
    setRange: (state, action: PayloadAction<number>) => {
      state.range = action.payload;
    },
  },
});

export const {setRange} = rangeSlice.actions;
export default rangeSlice.reducer;
