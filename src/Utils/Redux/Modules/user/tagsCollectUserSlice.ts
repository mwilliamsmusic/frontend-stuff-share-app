import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store";

export interface ICollectTagsUser {
  tagName: string;
}
const initialState: Array<ICollectTagsUser> = [];

export const tagsCollectUserSlice = createSlice({
  name: "tagsCollectUser",
  initialState,
  reducers: {
    updateTagsCollectUser: (
      state,
      action: PayloadAction<Array<ICollectTagsUser>>
    ) => {
      return (state = action.payload);
    },
  },
});

export const {updateTagsCollectUser} = tagsCollectUserSlice.actions;
export const selectTagsCollectUser = (state: RootState) =>
  state.tagsCollectUser;
export default tagsCollectUserSlice.reducer;
