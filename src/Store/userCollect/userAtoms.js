import {atom} from "recoil";

// All Collections
export const userCollectAllState = atom({
  key: "userCollectAllState",
  default: [],
});

// All Items
export const userCollectItemAllState = atom({
  key: "userCollectItemAllState",
  default: [],
});

export const userCollectInfoState = atom({
  key: "userCollectInfoState",
  default: {id: 0, title: "", collectForm: null},
});

export const userItemInfoState = atom({
  key: "userItemInfoState",
  default: {title: "", collectId: 0, form: null},
});

export const userItemFormState = atom({
  key: "userItemFormState",
  default: {},
});

export const userItemCollectFormState = atom({
  key: "userItemCollectFormState",
  default: {},
});
