import React, {Dispatch, Fragment, SetStateAction} from "react";
import {useRecoilValue} from "recoil";
import {StdBtn} from "../../../../../../../CSS/globalCSS";
import {BLUE, PINK} from "../../../../../../../CSS/ITGlobalCSS";
import {
  userItemFormState,
  userItemInfoState,
} from "../../../../../../../Store/userCollect/userAtoms";
import EditForm from "./EditForm";

interface Props {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  saveForm: () => void;
  updateItemForm: (formObj: object) => void;
}

function EditDisplayView(props: Props) {
  const userItemInfo = useRecoilValue(userItemInfoState);
  const userItemForm = useRecoilValue(userItemFormState);

  const form = userItemForm === null ? null : Object.entries(userItemForm);
  const editForm =
    form &&
    form.map(([k, v]) => (
      <EditForm k={k} v={v} updateItemForm={props.updateItemForm}></EditForm>
    ));

  return (
    <Fragment>
      <h2>{`Edit ${userItemInfo.title}`}</h2>
      {editForm}
      <StdBtn
        bgColor={BLUE}
        brdColor={PINK}
        onClick={() => props.setIsEdit(false)}
      >
        Close
      </StdBtn>
    </Fragment>
  );
}

export default EditDisplayView;
