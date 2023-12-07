import {createSlice} from '@reduxjs/toolkit';
import {EnumStatus} from '../../../types/Enums';
import {postForm} from './asyncActions';
import {TypeResponseStatusForm} from './interface';

interface IState {
  status: EnumStatus;
  responseStatus: TypeResponseStatusForm | null;
}

const initialState: IState = {
  status: EnumStatus.DEFAULT,
  responseStatus: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStatusDefault: state => {
      state.status = EnumStatus.DEFAULT;
    },
  },
  extraReducers(builder) {
    builder.addCase(postForm.pending, state => {
      state.status = EnumStatus.LOADING;
    });
    builder.addCase(postForm.fulfilled, (state, actions) => {
      state.status = EnumStatus.SUCCESS;
      if (actions.payload.status_text === 'reject') {
        state.responseStatus = 'reject';
      } else {
        state.responseStatus = 'success';
      }
    });
    builder.addCase(postForm.rejected, state => {
      state.status = EnumStatus.ERROR;
      state.responseStatus = 'reject';
    });
  },
});

export const {setStatusDefault} = formSlice.actions;
export default formSlice.reducer;
