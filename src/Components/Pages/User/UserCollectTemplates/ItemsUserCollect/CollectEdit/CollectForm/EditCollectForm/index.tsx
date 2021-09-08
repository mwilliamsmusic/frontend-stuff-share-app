import axios from "axios";
import React, {
  Dispatch,
  FormEvent,
  Fragment,
  SetStateAction,
  SyntheticEvent,
  useState,
} from "react";
import {IForm} from "../../../../../../../../Utils/basicInterfaces";
import {updateCollectFormUser} from "../../../../../../../../Utils/Redux/Modules/user/collectFormUserSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../Utils/Redux/ReduxHook";
import {updateCollectFormURL} from "../../../../../../../../Utils/URL/apiURL";

import {disableButton} from "../../../../../../../../Utils/validation";
import {patchUser} from "../../../../../Utils/axiosUserConfig";
import {addForm, deleteForm} from "../../../../../Utils/editForm";
import AddCollectFieldView from "./AddCollectFieldView";
import CollectFormBtnView from "./CollectFormBtnView";

interface Props {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

function EditCollectForm(props: Props) {
  const [newField, setNewField] = useState<string>("");
  const [fieldDisabled, setFieldDisabled] = useState<boolean>();
  const dispatch = useAppDispatch();
  const collectForm = useAppSelector((state) => state.collectFormUser);
  const collect = useAppSelector((state) => state.collectUser);

  async function saveForm(event: FormEvent) {
    event.preventDefault();
    const data = {
      id: collect.id,
      collectForm: JSON.stringify(collectForm),
    };
    try {
      const form = await axios(patchUser(updateCollectFormURL, data));
    } catch (error) {}

    window.location.reload();
  }

  function fieldHandler(field: string) {
    setNewField(field);
    setFieldDisabled(disableButton(field));
  }

  function addFieldState(event: SyntheticEvent) {
    event.preventDefault();
    // Keep newField to prevent state duplicates and mutations
    const collectArray: Array<IForm> = collectForm;
    dispatch(updateCollectFormUser(addForm(collectArray, newField)));

    setNewField("");
    setFieldDisabled(false);
  }

  function deleteFieldState(event: SyntheticEvent, deleteKey: string) {
    event.preventDefault();
    const collectArray: Array<IForm> = collectForm;
    dispatch(updateCollectFormUser(deleteForm(collectArray, deleteKey)));
  }

  return (
    <Fragment>
      <AddCollectFieldView
        addFieldState={addFieldState}
        fieldHandler={fieldHandler}
        fieldDisabled={fieldDisabled}
        newField={newField}
      />
      <CollectFormBtnView
        deleteFieldState={deleteFieldState}
        setIsEdit={props.setIsEdit}
        saveForm={saveForm}
      />
    </Fragment>
  );
}
export default EditCollectForm;
