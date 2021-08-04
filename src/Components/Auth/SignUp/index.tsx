import React, {Fragment, useState} from "react";
import SignUpForm from "./SignUpForm";
import axios, {AxiosError, AxiosResponse} from "axios";
import {signUp} from "../axiosAuthConfig";
import ResponsePrompt from "../../../Utils/Components/ResponsePrompt";

function SignUp() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(true);
  const [isPrompt, setIsPrompt] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const btnHandler = (username: string, password: string, email: string) => {
    if (
      username === "" ||
      password === "" ||
      email === "" ||
      email.includes("@") === false ||
      email.includes(".") === false
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  const usernameHandler = (username: string) => {
    setUsername(username);
    btnHandler(username, password, email);
  };

  const passwordHandler = (password: string) => {
    setPassword(password);
    btnHandler(username, password, email);
  };

  const emailHandler = (email: string) => {
    setEmail(email);
    btnHandler(username, password, email);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    requestHandler();
  };

  const requestHandler = () => {
    axios(signUp(username, password, email)).then(
      (res: AxiosResponse) => {
        window.location.href = `${process.env.REACT_APP_FRONTEND}`;
      },
      (err: AxiosError) => {
        try {
          setMessage(err.response.data.message);
          setIsError(false);
          setIsPrompt(true);
        } catch (e) {
          setMessage("Please try registering again.");
          setIsError(true);
          setIsPrompt(true);
        }
      }
    );
  };
  /*
  {isPrompt ? (
        <ResponsePrompt message={message} isPrompt={isPrompt} />
      ) : null}
*/
  return (
    <Fragment>
      <SignUpForm
        username={username}
        password={password}
        email={email}
        usernameHandler={usernameHandler}
        passwordHandler={passwordHandler}
        emailHandler={emailHandler}
        submitHandler={submitHandler}
        disable={disable}
      />
    </Fragment>
  );
}

export default SignUp;
