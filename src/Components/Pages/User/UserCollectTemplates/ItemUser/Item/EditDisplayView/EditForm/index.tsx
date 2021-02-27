import React, {Fragment, useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {StdBtn, StdForm} from "../../../../../../../../CSS/globalCSS";
import {BLUE, GREEN, PINK} from "../../../../../../../../CSS/ITGlobalCSS";
import {
  userItemFormState,
  userItemInfoState,
} from "../../../../../../../../Store/userCollect/userAtoms";
import {IKey} from "../../../../../../../../Utils/Components/ITGlobal";

interface Props {
  k: any;
  v: any;
  updateItemForm: (formObj: object) => void;
}

function EditForm(props: Props) {
  const [userItemForm, setUserItemForm] = useRecoilState(userItemFormState);
  const [addValue, setAddValue] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(false);

  function objHandler(value: string) {
    setAddValue(value);
  }

  function editObj(event: React.FormEvent) {
    event.preventDefault();
    const newObj: IKey = {};
    newObj[props.k] = addValue;
    const editKey = {...userItemForm, ...newObj};
    setDisable(true);
    setUserItemForm(editKey);
    props.updateItemForm(editKey);
  }

  function deleteObj() {
    const objState: IKey = userItemForm;

    const deleteObj = Object.keys(objState).reduce((object: IKey, key) => {
      if (key !== props.k) {
        object[key] = objState[key];
      }
      return object;
    }, {});

    props.updateItemForm(deleteObj);

    setUserItemForm(deleteObj);
  }

  return (
    <Fragment>
      <StdForm onSubmit={editObj}>
        <label htmlFor={props.k}>
          {props.k}
          <input
            id={props.k}
            value={addValue}
            placeholder={props.v}
            type="text"
            onChange={(e) => objHandler(e.target.value)}
          />

          <StdBtn
            bgColor={GREEN}
            brdColor={BLUE}
            type="submit"
            disabled={disable}
          >
            Update
          </StdBtn>
          <StdBtn bgColor={PINK} brdColor={BLUE} onClick={deleteObj}>
            Delete
          </StdBtn>
        </label>
      </StdForm>
    </Fragment>
  );
}

export default EditForm;
