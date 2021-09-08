import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITag} from "../../../basicInterfaces";
import {RootState} from "../../store";

const initialState: Array<ITag> = [];

export const tagsCollectUserSlice = createSlice({
  name: "tagsCollectUser",
  initialState,
  reducers: {
    updateTagsCollectUser: (state, action: PayloadAction<Array<ITag>>) => {
      return (state = action.payload);
    },
  },
});

export const {updateTagsCollectUser} = tagsCollectUserSlice.actions;
export const selectTagsCollectUser = (state: RootState) =>
  state.tagsCollectUser;
export default tagsCollectUserSlice.reducer;
