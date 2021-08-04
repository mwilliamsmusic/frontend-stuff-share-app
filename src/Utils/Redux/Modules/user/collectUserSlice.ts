import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IForm} from "../../../../Components/Pages/User/Utils/Interfaces/ICollectUser";
import {RootState} from "../../store";

export interface ICollectUser {
  collectId: number | null;
  title: string | null;
  path: string | null;
  collectForm: Array<IForm> | null;
  status: string | null;
  image: string | null;
}

const initialState: ICollectUser = {
  collectId: null,
  title: null,
  path: null,
  collectForm: null,
  status: null,
  image: null,
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
