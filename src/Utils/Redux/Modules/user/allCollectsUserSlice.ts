import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IForm} from "../../../../Components/Pages/User/Utils/Interfaces/ICollectUser";
import {RootState} from "../../store";

export interface IAllCollectsUser {
  collectId: number | null;
  title: string | null;
  path: string | null;
  collectForm: Array<IForm> | null;
  status: string | null;
  image: string | null;
}

const initialState: Array<IAllCollectsUser> = [];

export const allCollectsUserSlice = createSlice({
  name: "allCollectsUser",
  initialState,
  reducers: {
    updateAllCollectsUser: (
      state,
      action: PayloadAction<Array<IAllCollectsUser>>
    ) => {
      return (state = action.payload);
    },
  },
});

export const {updateAllCollectsUser} = allCollectsUserSlice.actions;
export const selectUserCollects = (state: RootState) => state.allCollectsUser;
export default allCollectsUserSlice.reducer;
