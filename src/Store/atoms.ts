import {atom} from "recoil";

export const collectMainState = atom({
  key: "collectMainState",
  default: {},
});

export const collectItemState = atom({
  key: "collectItemState",
  default: {},
});
