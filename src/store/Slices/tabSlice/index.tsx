import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {MainScreenProp} from '../../../screens/MainScreen';
import {RootStackParamList} from '../../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';

interface IStore {
  tab: number;
  screen: keyof RootStackParamList;
}

const initialState: IStore = {
  tab: 0,
  screen: 'MainPage',
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setTab: (state, action: PayloadAction<number>) => {
      state.tab = action.payload;
    },
    setScreen: (state, action: PayloadAction<keyof RootStackParamList>) => {
      state.screen = action.payload;
    },
  },
});

export const {setTab, setScreen} = tabSlice.actions;
export default tabSlice.reducer;
