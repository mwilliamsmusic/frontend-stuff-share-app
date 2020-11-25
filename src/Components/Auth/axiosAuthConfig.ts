import {signUpURL, signInURL} from "../../Utils/urlCollect";
import {Method} from "axios";

const POST = "POST" as Method;

export const signUp = (username: string, password: string, email: string) => {
  return {
    method: POST,
    url: `${signUpURL}`,
    data: {
      username: `${username}`,
      password: `${password}`,
      email: `${email}`,
    },

    timeout: 60000,
  };
};

export const signIn = (username: string, password: string) => {
  return {
    method: POST,
    url: `${signInURL}`,
    data: {
      username: `${username}`,
      password: `${password}`,
    },

    timeout: 60000,
  };
};
