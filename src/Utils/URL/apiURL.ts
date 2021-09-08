// Auth
// sign up
export const signUpURL = `${process.env.REACT_APP_USER_BACKEND}/user/reg`;
// Sign in
export const signInURL = `${process.env.REACT_APP_USER_BACKEND}/user/auth`;

// USER COLLECT
// PATCH Collection
export const patchUserCollectURL = `${process.env.REACT_APP_USER_BACKEND}/user/collect/uc`;
//User GET all collection
export const getAllUserCollectsURL = `${process.env.REACT_APP_USER_BACKEND}/user/collect/all`;
// User GET one collection
export const getUserCollectURL = `${process.env.REACT_APP_USER_BACKEND}/user/collect/one`;
// User POST Collection
export const postUserCollectURL = `${process.env.REACT_APP_USER_BACKEND}/user/collect`;
// User DELETE Collection
export const deleteUserCollectURL = `${process.env.REACT_APP_USER_BACKEND}/user/collect/dc`;
// USER COLLECT FORM
// Update collect form
export const updateCollectFormURL = `${process.env.REACT_APP_USER_BACKEND}/user/collect/ucf`;
// Delete collect form
export const deleteCollectFormURL = `${process.env.REACT_APP_USER_BACKEND}/user/collect/dcf`;

// USER ITEM
// Patch Update Item
export const patchUserItemURL = `${process.env.REACT_APP_USER_BACKEND}/user/item/collect/ui`;
// User GET one Item
export const getUserItemURL = `${process.env.REACT_APP_USER_BACKEND}/user/item/collect/one`;
//User GET all Items
export const getUserCollectItemsURL = `${process.env.REACT_APP_USER_BACKEND}/user/item/collect/all`;
// POST User Item
export const postUserItemURL = `${process.env.REACT_APP_USER_BACKEND}/user/item/collect`;
// Update item form
export const updateItemFormURL = `${process.env.REACT_APP_USER_BACKEND}/user/item/collect/uif`;
// User DELETE Item
export const deleteUserItemURL = `${process.env.REACT_APP_USER_BACKEND}/user/item/collect/di`;

// Image Update
export const imagePostURL = `${process.env.REACT_APP_IMAGE_BACKEND}/image`;

// Tag Collect User
export const getAllCollectTagsURL = `${process.env.REACT_APP_USER_BACKEND}/tag/collect/gct`;
export const addCollectTagURL = `${process.env.REACT_APP_USER_BACKEND}/tag/collect/act`;
export const removeCollectTagURL = `${process.env.REACT_APP_USER_BACKEND}/tag/collect/rct`;
// Tag Item User
export const getAllItemTagsURL = `${process.env.REACT_APP_USER_BACKEND}/tag/item/git`;
export const addItemTagURL = `${process.env.REACT_APP_USER_BACKEND}/tag/item/ait`;
export const removeItemTagURL = `${process.env.REACT_APP_USER_BACKEND}/tag/item/rit`;

// Collect
export const allCollectsUsernameURL = `${process.env.REACT_APP_QUERY_BACKEND}/query/collect/name`;

// Cool
export const createCoolURL = `${process.env.REACT_APP_QUERY_BACKEND}/user/cool/collect/create`;
export const getCoolURL = `${process.env.REACT_APP_QUERY_BACKEND}/query/cool/collect/id`;
