import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IForm} from "../../../basicInterfaces";
import {RootState} from "../../store";

export interface IAllCollects {
  id: number | null;
  title: string | null;
  imagePath: string | null;
  collectForm: Array<IForm> | null;
  status: string | null;
  coolValue: number;
}

const initialState: Array<IAllCollects> = [];

export const allCollectsSlice = createSlice({
  name: "allCollects",
  initialState,
  reducers: {
    updateAllCollects: (state, action: PayloadAction<Array<IAllCollects>>) => {
      return (state = action.payload);
    },
  },
});

export const {updateAllCollects} = allCollectsSlice.actions;
export const selectCollects = (state: RootState) => state.allCollects;
export default allCollectsSlice.reducer;
