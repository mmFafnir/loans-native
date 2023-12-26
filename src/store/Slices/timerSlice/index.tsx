import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface IState {
  timerHome: string | null;
}

const initialState: IState = {
  timerHome: null,
};

const timerSlide = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimer: (state, action: PayloadAction<string | null>) => {
      state.timerHome = action.payload;
    },
  },
});

export const {setTimer} = timerSlide.actions;

export default timerSlide.reducer;
