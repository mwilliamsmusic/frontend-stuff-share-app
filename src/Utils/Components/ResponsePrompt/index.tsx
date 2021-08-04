import React, {Fragment} from "react";
import {ResStyle} from "../../../CSS/GlobalCSS/globalCSS";
import {MINT, RED} from "../../../CSS/GlobalCSS/typesGlobalCSS";

interface Props {
  isError: boolean;
  message: string;
}

function ResponsePrompt(props: Props) {
  return (
    <Fragment>
      {props.isError ? (
        <ResStyle bgColor={MINT} height="100px">
          {props.message}
        </ResStyle>
      ) : (
        <ResStyle bgColor={RED} height="100px">
          {props.message}
        </ResStyle>
      )}
    </Fragment>
  );
}

export default ResponsePrompt;
