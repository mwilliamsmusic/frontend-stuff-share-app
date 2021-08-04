import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IForm} from "../../../../Components/Pages/User/Utils/Interfaces/ICollectUser";
import {RootState} from "../../store";

export interface IItemUser {
  collectId: number | null;
  title: string | null;
  path: string | null;
  collectForm: Array<IForm> | null;
  status: string | null;
  image: string | null;
}

const initialState: IItemUser = {
  collectId: null,
  title: null,
  path: null,
  collectForm: null,
  status: null,
  image: null,
};

export const itemUserSlice = createSlice({
  name: "itemUser",
  initialState,
  reducers: {
    updateItemUser: (state, action: PayloadAction<IItemUser>) => {
      return {...state, ...action.payload};
    },
  },
});

export const {updateItemUser} = itemUserSlice.actions;
export const selectUserItem = (state: RootState) => state.itemUser;
export default itemUserSlice.reducer;
