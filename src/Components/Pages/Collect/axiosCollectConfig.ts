import {collectUser} from "../../../Utils/urlCollect";
import {Method} from "axios";

const POST = "POST" as Method;
const GET = "GET" as Method;
const PUT = "PUT" as Method;

//const id = localStorage.getItem("id");
//const token = localStorage.getItem("token");

export const collectAllUser = (id: any) => {
  return {
    method: GET,
    url: `${collectUser}${id}`,
    // headers: {Authorization: `Bearer ${token}`},
    timeout: 60000,
  };
};
