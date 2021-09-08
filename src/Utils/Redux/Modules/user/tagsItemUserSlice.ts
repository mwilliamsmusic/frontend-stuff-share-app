import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITag} from "../../../basicInterfaces";
import {RootState} from "../../store";

const initialState: Array<ITag> = [];

export const tagsItemUserSlice = createSlice({
  name: "tagsItemUser",
  initialState,
  reducers: {
    updateTagsItemUser: (state, action: PayloadAction<Array<ITag>>) => {
      return (state = action.payload);
    },
  },
});

export const {updateTagsItemUser} = tagsItemUserSlice.actions;
export const selectTagsItemUser = (state: RootState) => state.tagsItemUser;
export default tagsItemUserSlice.reducer;
