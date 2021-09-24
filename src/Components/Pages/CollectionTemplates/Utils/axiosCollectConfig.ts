import {Method} from "axios";

export const COLLECT_ORIGIN = "collect";
export const ITEM_ORIGIN = "item";

const POST = "POST" as Method;

const time = 300000;

export const postCollect = (url: string, data: any) => {
  return {
    method: POST,
    url: url,
    data: data,
    timeout: time,
  };
};
