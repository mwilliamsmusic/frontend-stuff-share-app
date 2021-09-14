import {configureStore} from "@reduxjs/toolkit";
import userAllItems from "../Modules/user/allItemsUserSlice";
import userAllCollects from "../Modules/user/allCollectsUserSlice";
import userCollect from "../Modules/user/collectUserSlice";
import userItem from "../Modules/user/itemUserSlice";
import userCollectForm from "../Modules/user/collectFormUserSlice";
import userItemForm from "../Modules/user/itemFormUserSlice";
import userTagsCollect from "../Modules/user/tagsCollectUserSlice";
import userTagsItem from "../Modules/user/tagsItemUserSlice";
import infoCollect from "../Modules/collect/collectSlice";
import infoItem from "../Modules/item/itemSlice";
import infoAllCollects from "../Modules/collect/allCollectsSlice";
import infoAllItems from "../Modules/item/allItemsSlice";

const store = configureStore({
  reducer: {
    allCollectsUser: userAllCollects,
    allItemsUser: userAllItems,
    collectUser: userCollect,
    itemUser: userItem,
    collectFormUser: userCollectForm,
    itemFormUser: userItemForm,
    tagsCollectUser: userTagsCollect,
    tagsItemUser: userTagsItem,
    collect: infoCollect,
    item: infoItem,
    allCollects: infoAllCollects,
    allItems: infoAllItems,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
