import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface IStore {
  tab: number;
}

const initialState: IStore = {
  tab: 0,
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setTab: (state, action: PayloadAction<number>) => {
      state.tab = action.payload;
    },
  },
});

export const {setTab} = tabSlice.actions;
export default tabSlice.reducer;
