import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IForm} from "../../../../Components/Pages/User/Utils/Interfaces/ICollectUser";
import {RootState} from "../../store";

const initialState: Array<IForm> = [];

export const itemFormUserSlice = createSlice({
  name: "itemFormUser",
  initialState,
  reducers: {
    updateItemFormUser: (state, action: PayloadAction<Array<IForm>>) => {
      return [...state, ...action.payload];
    },
  },
});

export const {updateItemFormUser} = itemFormUserSlice.actions;
export const selectUserItemForm = (state: RootState) => state.itemFormUser;
export default itemFormUserSlice.reducer;
