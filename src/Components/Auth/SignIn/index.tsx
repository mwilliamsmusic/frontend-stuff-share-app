import React, {useState, Fragment} from "react";
import SignInForm from "./SignInForm";
import {signIn} from "../axiosAuthConfig";
import axios, {AxiosResponse, AxiosError} from "axios";

function SignIn() {
  const [username, setUsername] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [disable, setDisable] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  const btnHandler = (username: string, password: string) => {
    if (username === "" || password === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };
  const usernameHandler = (username: string) => {
    setUsername(username);
    btnHandler(username, password);
  };
  const passwordHandler = (password: string) => {
    setPassword(password);
    btnHandler(username, password);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    requestHandler();
  };
  const relocate = () => {
    window.location.href = process.env.REACT_APP_COLLECT_FRONTEND;
  };
  const requestHandler = () => {
    axios(signIn(username, password)).then(
      (res: AxiosResponse) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.username);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("log", "true");
        relocate();
      },
      (err: AxiosError) => {
        setError(err);

        setPassword("");
      }
    );
  };

  return (
    <Fragment>
      <SignInForm
        username={username}
        password={password}
        usernameHandler={usernameHandler}
        passwordHandler={passwordHandler}
        submitHandler={submitHandler}
        disable={disable}
      />
    </Fragment>
  );
}

export default SignIn;
