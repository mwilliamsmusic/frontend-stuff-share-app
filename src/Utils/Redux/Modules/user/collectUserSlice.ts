import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IForm} from "../../../basicInterfaces";
import {RootState} from "../../store";

export interface ICollectUser {
  id: number | null;
  userId: number | null;
  title: string | null;
  collectForm: Array<IForm> | null;
  status: string | null;
  imagePath: string | null;
  color: string | null;
  created: string | null;
  updated: string | null;
}

const initialState: ICollectUser = {
  userId: null,
  id: null,
  title: null,
  collectForm: null,
  status: null,
  imagePath: null,
  color: null,
  created: null,
  updated: null,
};

export const collectUserSlice = createSlice({
  name: "collectUser",
  initialState,
  reducers: {
    updateCollectUser: (state, action: PayloadAction<ICollectUser>) => {
      return (state = action.payload);
    },
  },
});

export const {updateCollectUser} = collectUserSlice.actions;
export const selectUserCollect = (state: RootState) => state.collectUser;
export default collectUserSlice.reducer;
