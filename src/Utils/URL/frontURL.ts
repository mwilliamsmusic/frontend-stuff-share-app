type UserURL =
  | "/usercollection/all/items/"
  | "/user/me/"
  | "/user/all/collection/"
  | "/useritem/";
type MainURL = "/main/collect/";
type AuthURL = "/signin/" | "/signup/";
type IdURL = "/usercollection/all/items/:id" | "/useritem/:id/";

// Auth
export const signUp: AuthURL = "/signup/";
export const signIn: AuthURL = "/signin/";

// Main
export const mainCollect: MainURL = "/main/collect/";

// User
export const collectUser: UserURL = "/user/all/collection/";
export const collectUserId = "/user/all/collection/:id";
export const itemsUserCollect: UserURL = "/usercollection/all/items/";
export const itemsUserCollectId: IdURL = "/usercollection/all/items/:id";
export const itemUser: UserURL = "/useritem/";
export const itemUserId: IdURL = "/useritem/:id/";
export const userMe: UserURL = "/user/me/";
