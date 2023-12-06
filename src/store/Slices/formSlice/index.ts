import {createSlice} from '@reduxjs/toolkit';
import {EnumStatus} from '../../../types/Enums';
import {postForm} from './asyncActions';

interface IState {
  status: EnumStatus;
}

const initialState = {
  status: EnumStatus.DEFAULT,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(postForm.pending, state => {
      state.status = EnumStatus.LOADING;
    });
    builder.addCase(postForm.fulfilled, state => {
      state.status = EnumStatus.SUCCESS;
    });
    builder.addCase(postForm.rejected, state => {
      state.status = EnumStatus.ERROR;
    });
  },
});

export default formSlice.reducer;
