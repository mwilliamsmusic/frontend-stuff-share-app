import React, {useState} from "react";
import {BLUE, PINK} from "../../../../../../CSS/ITGlobalCSS";
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
  postCollect: () => void;
}

function CreateCollectView(props: Props) {
  return (
    <CenterContent>
      <PageContainer>
        <h2>Create Collection</h2>
        <StdForm onSubmit={props.postCollect}>
          <label htmlFor="create-collect">
            Title:{"  "}
            <input
              id="create-collect"
              value={props.collectTitle}
              placeholder="Enter Collection Title"
              onChange={(e) => props.titleHandler(e.target.value)}
            />
            <StdBtn
              bgColor={BLUE}
              brdColor={PINK}
              type="submit"
              disabled={props.submitDisabled}
            >
              Create
            </StdBtn>
          </label>
        </StdForm>
      </PageContainer>
    </CenterContent>
  );
}

export default CreateCollectView;
