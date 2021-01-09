import {allUserCollect, allItemUserCollect} from "../../../../Utils/urlCollect";
import {Method} from "axios";
import {token} from "../../../../Utils/storageData";
import {userId} from "../../../../Utils/data";

const POST = "POST" as Method;
const GET = "GET" as Method;
const PUT = "PUT" as Method;

export const userCollectAll = () => {
  return {
    method: POST,
    url: `${allUserCollect}`,
    headers: {Authorization: `Bearer ${token}`},
    data: {userId: userId},
    timeout: 6000,
  };
};

export const ItemUserCollectAll = (id: string) => {
  const itemId = parseInt(id);

  return {
    method: POST,
    url: `${allItemUserCollect}`,
    headers: {Authorization: `Bearer ${token}`},
    data: {userId: userId, collectId: itemId},
    timeout: 6000,
  };
};
