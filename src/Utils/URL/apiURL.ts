// Auth
// sign up
export const signUpURL = `${process.env.REACT_APP_COLLECT_BACKEND}/user/reg`;
// Sign in
export const signInURL = `${process.env.REACT_APP_COLLECT_BACKEND}/user/auth`;

// USER COLLECT
// PATCH Collection
export const patchUserCollectURL = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/collect/uc`;
//User GET all collection
export const getAllUserCollectsURL = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/collect/all`;
// User GET one collection
export const getUserCollectURL = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/collect/one`;
// User POST Collection
export const postUserCollectURL = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/collect`;
// User DELETE Collection
export const deleteUserCollectURL = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/collect/dc`;
// USER COLLECT FORM
// Update collect form
export const updateCollectForm = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/collect/ucf`;
// Delete collect form
export const deleteCollectForm = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/collect/dcf`;

// USER ITEM
// Update Item
export const updateUserItem = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/item/update`;
// User GET one Item
export const getUserItemURL = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/item/one`;
//User GET all Items
export const getAllUserItemURL = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/item/all`;
// POST User Item
export const postUserItemURL = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/item`;
// Update item form
export const updateItemFormURL = `${process.env.REACT_APP_COLLECT_BACKEND}/end/user/item/uif`;

// Image Collect Update
export const imagePostURL = `${process.env.REACT_APP_IMAGE_BACKEND}/image`;
//export const imageUpdateItemURL = `${process.env.REACT_APP_IMAGE_BACKEND}/image/item`;

// Tag User
export const getAllCollectTagURL = `${process.env.REACT_APP_COLLECT_BACKEND}/tag/collect/gct`;
export const addCollectTagURL = `${process.env.REACT_APP_COLLECT_BACKEND}/tag/collect/act`;
export const removeCollectTagURL = `${process.env.REACT_APP_COLLECT_BACKEND}/tag/collect/rct`;
