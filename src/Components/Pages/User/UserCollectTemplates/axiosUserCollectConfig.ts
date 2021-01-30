import {
  allUserCollect,
  allItemUserCollect,
  collectData,
  updateCollect,
  updateItemCollect,
} from "../../../../Utils/urlCollect";
import {Method} from "axios";
import {token, idUser} from "../../../../Utils/storageData";

const POST = "POST" as Method;
const GET = "GET" as Method;
const PATCH = "PATCH" as Method;
const time = 6000;

export const userCollectAll = () => {
  return {
    method: POST,
    url: `${allUserCollect}`,
    headers: {Authorization: `Bearer ${token}`},
    data: {userId: idUser},
    timeout: time,
  };
};

export const itemUserCollectAll = (id: string) => {
  const itemId = parseInt(id);
  return {
    method: POST,
    url: `${allItemUserCollect}`,
    headers: {Authorization: `Bearer ${token}`},
    data: {userId: idUser, collectId: itemId},
    timeout: time,
  };
};

export const getCollectTitle = (id: string) => {
  const collectId = parseInt(id);

  return {
    method: GET,
    url: `${collectData}${collectId}`,
    headers: {Authorization: `Bearer ${token}`},
    timeout: time,
  };
};

export const updateUserCollect = (obj: object) => {
  return {
    method: PATCH,
    url: `${updateCollect}`,
    headers: {Authorization: `Bearer ${token}`},
    data: obj,
    timeout: time,
  };
};

export const updateUserItemCollect = (obj: object) => {
  return {
    method: PATCH,
    url: `${updateItemCollect}`,
    headers: {Authorization: `Bearer ${token}`},
    data: {obj},
    timeout: time,
  };
};
