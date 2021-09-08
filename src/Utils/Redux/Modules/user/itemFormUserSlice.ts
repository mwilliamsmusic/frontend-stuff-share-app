import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IForm} from "../../../basicInterfaces";
import {RootState} from "../../store";

const initialState: Array<IForm> = [];

export const itemFormUserSlice = createSlice({
  name: "itemFormUser",
  initialState,
  reducers: {
    updateItemFormUser: (state, action: PayloadAction<Array<IForm>>) => {
      return action.payload;
    },
  },
});

export const {updateItemFormUser} = itemFormUserSlice.actions;
export const selectUserItemForm = (state: RootState) => state.itemFormUser;
export default itemFormUserSlice.reducer;
