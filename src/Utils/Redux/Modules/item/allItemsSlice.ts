import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IForm} from "../../../basicInterfaces";

import {RootState} from "../../store";

export interface IAllItems {
  id: number | null;
  title: string | null;
  imagePath: string | null;
  status: string | null;
  coolValue: number;
}

const initialState: Array<IAllItems> = [];

export const allItemsSlice = createSlice({
  name: "allItems",
  initialState,
  reducers: {
    updateAllItems: (state, action: PayloadAction<Array<IAllItems>>) => {
      return [...state, ...action.payload];
    },
  },
});

export const {updateAllItems} = allItemsSlice.actions;
export const selectItems = (state: RootState) => state.allItems;
export default allItemsSlice.reducer;
