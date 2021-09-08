import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IForm} from "../../../basicInterfaces";
import {RootState} from "../../store";

export interface IItem {
  id: number | null;
  userId: number | null;
  collectId: number | null;
  title: string | null;
  itemForm: Array<IForm> | null;
  status: string | null;
  imagePath: string | null;
  color: string | null;
  created: string | null;
  updated: string | null;
}

const initialState: IItem = {
  id: null,
  userId: null,
  collectId: null,
  title: null,
  itemForm: null,
  status: null,
  imagePath: null,
  color: null,
  created: null,
  updated: null,
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    updateItem: (state, action: PayloadAction<IItem>) => {
      return (state = action.payload);
    },
  },
});

export const {updateItem} = itemSlice.actions;
export const selectUserItem = (state: RootState) => state.item;
export default itemSlice.reducer;
