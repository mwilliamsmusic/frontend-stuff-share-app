import {Method} from "axios";
import {usernameLS} from "../../../../Utils/storageData";

export const COLLECT_ORIGIN = "collect";
export const ITEM_ORIGIN = "item";
type Origin = "collect" | "image";
const POST = "POST" as Method;
const PATCH = "PATCH" as Method;
const GET = "GET" as Method;
const time = 300000;

const meh = usernameLS;
export const postImage = (url: string, data: any) => {
  return {
    method: POST,
    url: url,
    headers: {
      "Content-Type": "multipart/form-data",
      // "Access-Control-Allow-Origin": "*",
    },
    data: data,
    timeout: time,
    // withCredentials: true,
  };
};

export const postUser = (url: string, data: any) => {
  return {
    method: POST,
    url: url,
    headers: {"Access-Control-Allow-Credentials": true},
    data: data,
    timeout: time,
    withCredentials: true,
  };
};

export const getUser = (url: string, data: any) => {
  return {
    method: GET,
    url: url,
    data: data,
    timeout: time,
    withCredentials: true,
  };
};

export const getAllUser = (url: string) => {
  return {
    method: GET,
    url: url,
    // headers: {"Access-Control-Allow-Origin": "*"},
    // headers: {"Access-Control-Allow-Credentials": true},

    timeout: time,
    withCredentials: true,
  };
};

export const patchUser = (url: string, data: any) => {
  return {
    method: PATCH,
    url: url,
    //  headers: {Authorization: `Bearer ${tokenLS}`},
    data: data,
    timeout: time,
    withCredentials: true,
  };
};
/*
export const patchUser2 = (url: string, data: any) => {
  return {
    method: PATCH,
    url: url,
    //  headers: {Authorization: `Bearer ${tokenLS}`},
    data: data,
    timeout: time,
    withCredentials: true,
  };
};
*/
export function imageFormData(
  file: any,
  title: string,
  oldImage: string,
  origin: Origin
): FormData {
  let nameEdit = `${meh}__${title.replace(/ /g, "")}`;
  nameEdit = nameEdit.toLowerCase();
  const formData = new FormData();
  formData.append("imageName", nameEdit);
  formData.append("image", file);
  formData.append("oldName", oldImage);
  formData.append("origin", origin);
  formData.append("username", meh);
  return formData;
}
