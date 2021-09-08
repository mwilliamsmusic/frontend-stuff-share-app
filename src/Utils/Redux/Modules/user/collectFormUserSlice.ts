import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IForm} from "../../../basicInterfaces";

import {RootState} from "../../store";

const initialState: Array<IForm> = [];

export const collectFormUserSlice = createSlice({
  name: "collectFormUser",
  initialState,
  reducers: {
    updateCollectFormUser: (state, action: PayloadAction<Array<IForm>>) => {
      return action.payload;
    },
    clearCollectFormUser: (state) => {
      return (state = initialState);
    },
  },
});

export const {
  updateCollectFormUser,
  clearCollectFormUser,
} = collectFormUserSlice.actions;
export const selectUserCollectForm = (state: RootState) =>
  state.collectFormUser;
export default collectFormUserSlice.reducer;
