import React, {Fragment, useState} from "react";
import {ResStyle} from "../CSS/globalCSS";
import {MINT, RED} from "../CSS/ITGlobalCSS";

const usePrompt = () => {
  function Prompt() {
    const [message, setMessage] = useState < string > "";
    const [isError, setIsError] = useState < string > "";
    return (
      <Fragment>
        {isError ? (
          <ResStyle bgColor={MINT} height={"50px"}>
            {message}
          </ResStyle>
        ) : (
          <ResStyle bgColor={RED} height={"50px"}>
            {message}
          </ResStyle>
        )}
      </Fragment>
    );
  }
  return [, Prompt];
};
