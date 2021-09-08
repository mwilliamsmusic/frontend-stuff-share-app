import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IForm} from "../../../basicInterfaces";
import {RootState} from "../../store";

export interface IItemUser {
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

const initialState: IItemUser = {
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

export const itemUserSlice = createSlice({
  name: "itemUser",
  initialState,
  reducers: {
    updateItemUser: (state, action: PayloadAction<IItemUser>) => {
      return (state = action.payload);
    },
  },
});

export const {updateItemUser} = itemUserSlice.actions;
export const selectUserItem = (state: RootState) => state.itemUser;
export default itemUserSlice.reducer;
