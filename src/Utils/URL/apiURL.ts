// Auth

// sign up
export const signUpURL = `${process.env.BACKEND}user/register`;
// Sign in

export const signInURL = `https://localhost:44308/user/authenticate`;

//Collect
//GET Collect Data
export const collectData = "https://localhost:44308/end/usercollect/";

//Collect User Page
//User ALL GET collection

export const itemUserCollect = "https://localhost:44308/end/itemusercollect/";

export const allItemUserCollect =
  "https://localhost:44308/end/itemusercollect/all/";

export const createCollectURL = "https://localhost:44308/end/usercollect";

// IMAGE BACKEND
export const postImgCollectURL = `${process.env.IMAGE_BACKEND}/image/collectimage`;

// USER COLLECT
// PATCH Collection
export const patchUserCollectURL = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/collect/update`;
//User GET all collection
export const getAllUserCollectURL = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/collect/all`;
// User GET one collection
export const getUserCollectURL = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/collect/one`;

// User POST Collection
export const postUserCollectURL = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/collect`;

// USER ITEM
// POST GET Item
export const userItemURL = `${process.env.REACT_APP_COLLECT_BACKEND}/end/itemusercollect`;
// Update Item Collection
export const updateUserItem =
  "https://localhost:44308/end/itemusercollect/update";

export const getUserItemURL = `${process.env.REACT_APP_COLLECT_BACKEND}`;

export const getAllUserItemURL = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/item/all`;
// POST User Item
export const postUserItemURL = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/item`;
