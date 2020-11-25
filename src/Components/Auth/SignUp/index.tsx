import React, {useState} from "react";
import SignUpForm from "./SignUpForm";
import axios, {AxiosError, AxiosResponse} from "axios";
import {signUp} from "../axiosAuthConfig";
import {frontend} from "../../../Utils/urlCollect";

function SignUp() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(true);
  const [error, setError] = useState<any>();

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
        window.location.href = `${frontend}`;
      },
      (err: AxiosError) => {
        setError(error);
      }
    );
  };

  return (
    <div>
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
    </div>
  );
}

export default SignUp;
