import {
  UserCollectActionTypes,
  COLLECT_OBJECT,
  UserCollectState,
} from "./types";

const initialState: UserCollectState = {
  userCollectObj: {},
};

function userCollectReducer(
  state = initialState,
  action: UserCollectActionTypes
): UserCollectState {
  switch (action.type) {
    case COLLECT_OBJECT: {
      return {...state.userCollectObj, ...action.payload};
    }

    default:
      return state;
  }
}

export default userCollectReducer;
