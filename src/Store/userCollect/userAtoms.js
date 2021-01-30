import {atom, selector} from "recoil";

export const userCollectAllState = atom({
  key: "userCollectAllState",
  default: [],
});

export const userCollectItemAllState = atom({
  key: "userCollectItemAllState",
  default: [],
});

export const userCollectTitleState = atom({
  key: "userCollectTitleState",
  default: {title: ""},
});

export const userCollectFormState = atom({
  key: "userCollectFormState",
  default: {},
});

export const updateCollectFormState = atom({
  key: "updateCollectFormState",
  default: {},
});

export const titleString = selector({
  key: "titleString",
  get: ({get}) => {
    const state = get(userCollectTitleState);
    if (userCollectTitleState.title) {
      return state.title;
    } else return "";
  },
});
