import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IForm} from "../../../../Components/Pages/User/Utils/Interfaces/ICollectUser";
import {RootState} from "../../store";

export interface IAllItemsUser {
  itemId: number | null;
  collectId: number | null;
  title: string | null;
  path: string | null;
  itemForm: Array<IForm> | null;
  status: string | null;
  image: string | null;
}

const initialState: Array<IAllItemsUser> = [];

export const allItemsUserSlice = createSlice({
  name: "allItemsUser",
  initialState,
  reducers: {
    updateAllItemsUser: (
      state,
      action: PayloadAction<Array<IAllItemsUser>>
    ) => {
      return [...state, ...action.payload];
    },
  },
});

export const {updateAllItemsUser} = allItemsUserSlice.actions;
export const selectUserItems = (state: RootState) => state.allItemsUser;
export default allItemsUserSlice.reducer;
