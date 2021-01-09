export const COLLECT_OBJECT = "COLLECT_OBJECT";

export interface UserCollectState {
  userCollectObj: object;
}
export interface CollectObjectAction {
  type: typeof COLLECT_OBJECT;
  payload: UserCollectState;
}

export type UserCollectActionTypes = CollectObjectAction;
