import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IForm} from "../../../basicInterfaces";
import {RootState} from "../../store";

export interface ICollect {
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

const initialState: ICollect = {
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

export const collectSlice = createSlice({
  name: "collect",
  initialState,
  reducers: {
    updateCollect: (state, action: PayloadAction<ICollect>) => {
      return (state = action.payload);
    },
  },
});

export const {updateCollect} = collectSlice.actions;
export const selectCollect = (state: RootState) => state.collect;
export default collectSlice.reducer;
