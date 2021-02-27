import {Method} from "axios";
import {token} from "../../../../Utils/storageData";

const POST = "POST" as Method;
const PATCH = "PATCH" as Method;
const time = 3000;

export const postImage = (url: string, data: any) => {
  return {
    method: POST,
    url: url,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: data,
    timeout: time,
  };
};

export const requestUser = (url: string, data: any) => {
  return {
    method: POST,
    url: url,
    headers: {Authorization: `Bearer ${token}`},
    data: data,
    timeout: time,
  };
};

export const patchUser = (url: string, data: any) => {
  return {
    method: PATCH,
    url: url,
    headers: {Authorization: `Bearer ${token}`},
    data: data,
    timeout: time,
  };
};
