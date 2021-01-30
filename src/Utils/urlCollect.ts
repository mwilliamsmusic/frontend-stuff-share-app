// Backend URL
export const backend = "http://localhost:44308/";

// User collection create
export const collectMain = "http://localhost:8080/user/collection/";

// Get Collection one details
export const oneCollectInfo = `${backend}/user/collect/id/`;

// User GET all collection title only
export const allCollectByTitle = `${backend}/user/collect/title/`;

// Create Collection
export const createCollect = `${backend}/user/collect`;

// navebar auth
export const getMe = `${backend}/user/me/details/`;

// Collection Title
export const userOneCollectTitle = `${backend}/user/collect/title/id/`;
// http://localhost:8080/user/collect/id/

// GET all items of that collection
export const allCollectItem = `${backend}/user/collect/item/all/`;

// Collect fieldArray GET
export const collectObj = `${backend}/user/collect/field/obj/collect/`;

export const addCOllectObj = `${backend}/user/collect/field/id/`;

// Item fieldArray GET

// Auth

// sign up
export const signUpURL = `${backend}user/register`;
// Sign in

export const signInURL = `https://localhost:44308/user/authenticate`;

// frontend

export const frontend = "http://localhost:3000/";

export const reactUserCollectOne = "/me/collection/item/";

export const collectItem = "/me/collection/item/";

//Collect
//GET Collect Data
export const collectData = "https://localhost:44308/end/usercollect/";

//Collect User Page
//User ALL GET collection
export const allUserCollect = "https://localhost:44308/end/usercollect/all/";

export const itemUserCollect = "https://localhost:44308/end/itemusercollect/";

export const allItemUserCollect =
  "https://localhost:44308/end/itemusercollect/all/";

// Update Collection
export const updateCollect = "https://localhost:44308/end/usercollect/update";

// Update Item Collection
export const updateItemCollect =
  "https://localhost:44308/end/itemusercollect/update";
