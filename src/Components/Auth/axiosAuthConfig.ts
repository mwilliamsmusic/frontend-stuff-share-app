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
  const options = {
    method: POST,
    url: `${signInURL}`,
    data: {
      Username: `${username}`,
      Password: `${password}`,
    },

    timeout: 60000,
  };
  return options;
};
/*
export const options = {
  method: POST,
  url: `${signInURL}`,
  data: {
    Username: `${username}`,
    Password: `${password}`,
  },,
  timeout: 6000,
};*/
