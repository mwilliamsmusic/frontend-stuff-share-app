import React, {Fragment, useState} from "react";
import {useRecoilValue} from "recoil";
import {
  StdBtn,
  StdForm,
  UnorderListStyle,
} from "../../../../../../../../CSS/globalCSS";
import {BLUE, PINK} from "../../../../../../../../CSS/ITGlobalCSS";
import {userCollectInfoState} from "../../../../../../../../Store/userCollect/userAtoms";

interface Props {
  deleteFormKey: (key: string) => void;
  addFormKey: (key: string) => void;
  formState: () => void;
}

function FormCollectView(props: Props) {
  const [addKey, setAddKey] = useState<string>("");
  const userCollectForm = useRecoilValue(userCollectInfoState);

  const form = JSON.parse(userCollectForm.collectForm);

  function addKeyHandler(newKey: string) {
    setAddKey(newKey);
  }

  const listItem =
    form &&
    Object.keys(form).map((collect: any) => (
      <UnorderListStyle>
        <li key={collect.id}>
          {collect}
          <StdBtn
            bgColor={BLUE}
            brdColor={PINK}
            type="button"
            onClick={() => props.deleteFormKey(collect)}
          >
            Delete Field
          </StdBtn>
        </li>
      </UnorderListStyle>
    ));

  return (
    <Fragment>
      <h5>
        All new items added to the collection will contain these form fields.
      </h5>

      {listItem}
      <br />
      {addKey}
      <StdForm onSubmit={() => props.addFormKey(addKey)}>
        <label htmlFor="add-form-field">
          Add Field:{" "}
          <input
            type="text"
            id={addKey}
            value={addKey}
            placeholder={addKey}
            onChange={(e) => {
              addKeyHandler(e.target.value);
            }}
          />
        </label>
        <StdBtn bgColor={PINK} brdColor={BLUE} type="submit">
          Add
        </StdBtn>
      </StdForm>

      <StdBtn bgColor={PINK} brdColor={BLUE} onClick={props.formState}>
        Close
      </StdBtn>
    </Fragment>
  );
}

export default FormCollectView;
