import axios from "axios";
import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  SyntheticEvent,
  useState,
} from "react";
import {updateCollectFormUser} from "../../../../../../../../Utils/Redux/Modules/user/collectFormUserSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../Utils/Redux/ReduxHook";
import {updateCollectForm} from "../../../../../../../../Utils/URL/apiURL";
import {disableButton} from "../../../../../../../../Utils/validation";
import {patchUser} from "../../../../../Utils/axiosUserConfig";
import {deleteField} from "../../../../../Utils/editForm";
import {IForm} from "../../../../../Utils/Interfaces/ICollectUser";
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

  function saveForm() {
    const data = {
      collectId: collect.collectId,
      collectForm: JSON.stringify(collectForm),
    };
    try {
      axios(patchUser(updateCollectForm, data));
    } catch (error) {}
  }

  function fieldHandler(field: string) {
    setFieldDisabled(disableButton(field));
    setNewField(field);
  }

  function addFieldState(event: SyntheticEvent) {
    event.preventDefault();

    if (!collectForm.some((form) => form.field === newField)) {
      const fieldObj: IForm = {field: newField, value: ""};
      const newArr: Array<IForm> = [];
      newArr.push(fieldObj);
      const mergeState: Array<IForm> = [...collectForm, ...newArr];
      dispatch(updateCollectFormUser(mergeState));
    }
    setNewField("");
    setFieldDisabled(false);
  }
  /*
  function updateFieldState(event: SyntheticEvent, field: string) {
    event.preventDefault();
    const stateArr: Array<IForm> = [...collectForm];
    const objIndex = stateArr.findIndex((obj) => obj.field === field);
    let obj = {field: field, value: valueField} as IForm;
    stateArr.splice(objIndex, 1, obj);

    dispatch();
  }
  */
  function deleteFieldState(event: SyntheticEvent, deleteKey: string) {
    event.preventDefault();
    const someArray: Array<IForm> = collectForm;

    const newArr: Array<IForm> = someArray.filter(
      (key) => key.field !== deleteKey
    );
    dispatch(updateCollectFormUser(newArr));
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
      />
    </Fragment>
  );
}
export default EditCollectForm;
