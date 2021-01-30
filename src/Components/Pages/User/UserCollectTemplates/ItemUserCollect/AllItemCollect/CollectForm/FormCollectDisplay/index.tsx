import React, {useState} from "react";
import {useRecoilState} from "recoil";
import {
  Spacer,
  StdBtn,
  StdForm,
  UnorderListStyle,
} from "../../../../../../../../CSS/globalCSS";
import {BLUE, PINK} from "../../../../../../../../CSS/IGlobalCSS";
import {userCollectFormState} from "../../../../../../../../Store/userCollect/userAtoms";

interface Props {
  deleteFormKey: (key: string) => void;
  addFormKey: (field: any, e: React.FormEvent) => void;
  formState: () => void;
}

function FormCollectDisplay(props: Props) {
  const [addKey, setAddKey] = useState<string>("");
  const [userCollectForm, setuserCollectForm] = useRecoilState(
    userCollectFormState
  );

  function addKeyHandler(newKey: string) {
    setAddKey(newKey);
  }

  const listItem =
    userCollectForm &&
    Object.keys(userCollectForm).map((collect: any) => (
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
    <div>
      <h5>
        All new items added to the collection will contain these form fields.
      </h5>

      {listItem}
      <br />
      {addKey}
      <StdForm onSubmit={(e) => props.addFormKey(addKey, e)}>
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
    </div>
  );
}

export default FormCollectDisplay;
