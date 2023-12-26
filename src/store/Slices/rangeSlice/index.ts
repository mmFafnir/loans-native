import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface IState {
  range: number;
  email: string
}

const initialState: IState = {
  range: 400,
  email: '',
};

const rangeSlice = createSlice({
  name: 'range',
  initialState,
  reducers: {
    setRange: (state, action: PayloadAction<number>) => {
      state.range = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    }
  },
});

export const {setRange, setEmail} = rangeSlice.actions;
export default rangeSlice.reducer;
