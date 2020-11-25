import React from "react";
import {PageContainer, CenterContent} from "../../../CSS/globalCSS";

interface Props {
  username: string;
  password: string;
  email: string;
  usernameHandler: (username: string) => void;
  passwordHandler: (password: string) => void;
  emailHandler: (email: string) => void;
  submitHandler: (event: React.FormEvent) => void;
  disable: boolean;
}

function SignUpForm(prop: Props) {
  return (
    <CenterContent>
      <PageContainer>
        <div>
          <form onSubmit={prop.submitHandler}>
            <label htmlFor="username">
              <input
                id="username"
                value={prop.username}
                placeholder="Username"
                onChange={(e) => {
                  prop.usernameHandler(e.target.value);
                }}
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
            <label htmlFor="email">
              <input
                id="email"
                value={prop.email}
                placeholder="Email"
                onChange={(e) => prop.emailHandler(e.target.value)}
              />
            </label>
            <br />
            <button type="submit" disabled={prop.disable}>
              Sign Up
            </button>
            <br />
          </form>
        </div>
      </PageContainer>
    </CenterContent>
  );
}

export default SignUpForm;
