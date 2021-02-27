import React from "react";
import {
  CenterContent,
  PageContainer,
  StdBtn,
  StdForm,
} from "../../../../../../CSS/globalCSS";
import {BLUE, PINK} from "../../../../../../CSS/ITGlobalCSS";

interface Props {
  itemDisable: boolean;
  itemHandler: (title: string) => void;
  postItem: () => void;
  title: string;
  itemTitle: string;
}

function AddItemView(props: Props) {
  return (
    <CenterContent>
      <PageContainer>
        <h2>Add Item to {props.title} Collection</h2>
        <StdForm onSubmit={props.postItem}>
          <label htmlFor="create-item">
            Title:{"  "}
            <input
              id="create-item"
              value={props.itemTitle}
              placeholder="Enter Item Title"
              onChange={(e) => props.itemHandler(e.target.value)}
            />
            <StdBtn
              bgColor={BLUE}
              brdColor={PINK}
              type="submit"
              disabled={props.itemDisable}
            >
              Create
            </StdBtn>
          </label>
        </StdForm>
      </PageContainer>
    </CenterContent>
  );
}

export default AddItemView;
