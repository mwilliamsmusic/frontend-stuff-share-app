import React, {FormEvent, Fragment} from "react";
import {StdBtn} from "../../../../../../../../CSS/buttonsCSS";
import {StdForm} from "../../../../../../../../CSS/GlobalCSS/globalCSS";
import {BLUE} from "../../../../../../../../CSS/GlobalCSS/typesGlobalCSS";
interface Props {
  disabledTag: boolean;
  addTag: string;
  addTagHandler: (tag: string) => void;
  postTag: (event: FormEvent) => void;
}

function AddTagView(props: Props) {
  return (
    <Fragment>
      <StdForm onSubmit={(e) => props.postTag(e)}>
        <label htmlFor="add-tag">
          {`Tag Name: `}
          <input
            id="add-tag"
            value={props.addTag}
            placeholder="Enter Tag"
            onChange={(e) => props.addTagHandler(e.target.value)}
          />
          <StdBtn
            backgroundColor={BLUE}
            type="submit"
            disabled={props.disabledTag}
          >
            Create
          </StdBtn>
        </label>
      </StdForm>
    </Fragment>
  );
}

export default AddTagView;
