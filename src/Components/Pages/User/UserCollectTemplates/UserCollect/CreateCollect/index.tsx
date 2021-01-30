import React, {useState} from "react";
import {BLUE, PINK} from "../../../../../../CSS/IGlobalCSS";
import {
  StdForm,
  StdBtn,
  PageContainer,
  CenterContent,
} from "../../../../../../CSS/globalCSS";

interface Props {
  collectTitle: string;
  submitDisabled: boolean;
  titleHandler: (title: string) => void;
  submitCollect: (event: React.FormEvent) => void;
}

function CreateCollect(props: Props) {
  return (
    <CenterContent>
      <PageContainer>
        <h2>Create Collection</h2>
        <StdForm onSubmit={props.submitCollect}>
          <label htmlFor="create-collect">
            Title:{"  "}
            <input
              id="create-collect"
              value={props.collectTitle}
              placeholder="Enter Collection Title"
              onChange={(e) => props.titleHandler(e.target.value)}
            />
          </label>

          <StdBtn
            bgColor={BLUE}
            brdColor={PINK}
            type="submit"
            disabled={props.submitDisabled}
          >
            Create
          </StdBtn>
          <br />
        </StdForm>
      </PageContainer>
    </CenterContent>
  );
}

export default CreateCollect;
