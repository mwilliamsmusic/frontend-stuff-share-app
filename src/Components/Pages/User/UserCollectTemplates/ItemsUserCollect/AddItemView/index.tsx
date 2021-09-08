import React, {FormEvent, Fragment} from "react";
import {StdBtn, StdForm} from "../../../../../../CSS/GlobalCSS/globalCSS";
import {BLUE, PINK} from "../../../../../../CSS/GlobalCSS/typesGlobalCSS";
import {useAppSelector} from "../../../../../../Utils/Redux/ReduxHook";

interface Props {
  itemDisable: boolean;
  itemHandler: (title: string) => void;
  postItem: (event: FormEvent) => void;
  itemTitle: string;
}

function AddItemView(props: Props) {
  const collectInfo = useAppSelector((state) => state.collectUser);
  return (
    <Fragment>
      <h2>Add Item to {collectInfo.title} Collection</h2>
      <StdForm onSubmit={(event) => props.postItem(event)}>
        <label htmlFor="create-item">
          Title:{"  "}
          <input
            id="create-item"
            value={props.itemTitle}
            placeholder="Enter Item Title"
            onChange={(e) => props.itemHandler(e.target.value)}
          />
          <StdBtn bgColor={BLUE} type="submit" disabled={props.itemDisable}>
            Create
          </StdBtn>
        </label>
      </StdForm>
    </Fragment>
  );
}

export default AddItemView;
