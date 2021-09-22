type UserURL =
  | "/usercollection/all/items/"
  | "/user/me/"
  | "/user/all/collection/"
  | "/useritem/";
type MainURL = "/main/collect/";
type AuthURL = "/signin/" | "/signup/";
type IdURL = "/usercollection/all/items/:id" | "/useritem/:id/";

type CollectURL = "/collections/:username";
type ItemsCollectURL = "/collection/:collectId";
type ItemURL = "/item/:id";

// Auth
export const signUp: AuthURL = "/signup/";
export const signIn: AuthURL = "/signin/";

// Main
export const mainCollect: MainURL = "/main/collect/";

// Collection
export const usernameCollects: CollectURL = "/collections/:username";
// Items Collection
export const collection: ItemsCollectURL = "/collection/:collectId";
// Item
export const item: ItemURL = "/item/:id";
// User
export const collectUser: UserURL = "/user/all/collection/";
export const collectUserId = "/user/all/collection/:id";
export const itemsUserCollect: UserURL = "/usercollection/all/items/";
export const itemsUserCollectId: IdURL = "/usercollection/all/items/:id";
export const itemUser: UserURL = "/useritem/";
export const itemUserId: IdURL = "/useritem/:id/";
export const userMe: UserURL = "/user/me/";
