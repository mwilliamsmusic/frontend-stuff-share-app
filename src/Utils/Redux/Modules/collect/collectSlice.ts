import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store";

export interface ICollect {
  id: number | null;
  title: string | null;
  status: string | null;
  imagePath: string | null;
  coolValue: number | null;
  coolId: number | null;
  username: string | null;
}

const initialState: ICollect = {
  id: null,
  title: null,
  status: null,
  imagePath: null,
  coolValue: null,
  coolId: null,
  username: null,
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
