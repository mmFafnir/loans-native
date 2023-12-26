import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {EnumStatus} from '../../../types/Enums';
import {postForm} from './asyncActions';
import {TypeResponseStatusForm} from './interface';

interface IState {
  status: EnumStatus;
  responseStatus: TypeResponseStatusForm | null;
  redirect_url: string | null;
  lead_id: string | null;
  startCheck: boolean
}

const initialState: IState = {
  status: EnumStatus.DEFAULT,
  responseStatus: null,
  redirect_url: null,
  lead_id: null,
  startCheck: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStatusDefault: state => {
      state.status = EnumStatus.DEFAULT;
    },
    setResponseStatus: (
      state,
      actions: PayloadAction<TypeResponseStatusForm | null>,
    ) => {
      state.responseStatus = actions.payload;
    },
    setRedirectUrl: (state, action: PayloadAction<string | null>) => {
      state.redirect_url = action.payload;
    },
    setStartCheck: (state, action: PayloadAction<boolean>) => {
      state.startCheck = action.payload
    },
    setDefaultLeadId: (state) => {
      state.lead_id = null
    }
  },
  extraReducers(builder) {
    builder.addCase(postForm.pending, state => {
      state.status = EnumStatus.LOADING;
    });
    builder.addCase(postForm.fulfilled, (state, actions) => {
      state.status = EnumStatus.SUCCESS;
      state.responseStatus = actions.payload.status_text;
      state.lead_id = actions.payload.lead_id;
    });
    builder.addCase(postForm.rejected, state => {
      state.status = EnumStatus.ERROR;
      state.responseStatus = 'error';
    });
  },
});

export const {setStatusDefault, setResponseStatus, setRedirectUrl, setStartCheck, setDefaultLeadId} =
  formSlice.actions;
export default formSlice.reducer;
