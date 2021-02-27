import React from "react";
import {CenterContent, PageContainer} from "../../../CSS/globalCSS";

interface Props {
  submitHandler: (event: React.FormEvent) => void;
  username: string;
  usernameHandler: (username: string) => void;
  password: string;
  passwordHandler: (password: string) => void;
  disable: boolean;
}
function SignInForm(prop: Props) {
  return (
    <CenterContent>
      <PageContainer>
        <form onSubmit={prop.submitHandler}>
          <label htmlFor="username">
            <input
              id="username"
              value={prop.username}
              placeholder="Username"
              type="text"
              onChange={(e) => prop.usernameHandler(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="password">
            <input
              id="password"
              value={prop.password}
              placeholder="Password"
              type="password"
              onChange={(e) => prop.passwordHandler(e.target.value)}
            />
          </label>
          <br />
          <button type="submit" disabled={prop.disable}>
            Sign In
          </button>
          <br />
        </form>
      </PageContainer>
    </CenterContent>
  );
}

export default SignInForm;
