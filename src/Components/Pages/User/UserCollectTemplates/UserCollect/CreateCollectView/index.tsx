import React, {useState} from "react";
import {
  CenterContent,
  PageContainer,
  StdBtn,
  StdForm,
} from "../../../../../../CSS/GlobalCSS/globalCSS";
import {BLUE, PINK} from "../../../../../../CSS/GlobalCSS/typesGlobalCSS";

interface Props {
  collectTitle: string;
  submitDisabled: boolean;
  createTitle: (title: string) => void;
  postCollect: () => void;
}

function CreateCollectView(props: Props) {
  return (
    <CenterContent>
      <PageContainer>
        <h2>Create Collection</h2>
        <StdForm onSubmit={props.postCollect}>
          <label htmlFor="create-collect">
            Title:
            <input
              id="create-collect"
              value={props.collectTitle}
              placeholder="Enter Collection Title"
              onChange={(e) => props.createTitle(e.target.value)}
            />
            <StdBtn
              bgColor={BLUE}
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
