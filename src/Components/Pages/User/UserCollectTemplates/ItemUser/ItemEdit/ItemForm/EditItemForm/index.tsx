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
import {updateItemFormUser} from "../../../../../../../../Utils/Redux/Modules/user/itemFormUserSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../../Utils/Redux/ReduxHook";
import {updateItemFormURL} from "../../../../../../../../Utils/URL/apiURL";
import {disableButton} from "../../../../../../../../Utils/validation";
import {patchUser} from "../../../../../Utils/axiosUserConfig";
import {addForm, deleteForm} from "../../../../../Utils/editForm";
import AddItemFieldView from "./AddItemFieldView";
import ItemFormBtnView from "./ItemFormBtnView";

interface Props {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

function EditItemForm(props: Props) {
  const [newField, setNewField] = useState<string>("");
  const [fieldDisabled, setFieldDisabled] = useState<boolean>();
  const dispatch = useAppDispatch();
  const itemForm = useAppSelector((state) => state.itemFormUser);
  const item = useAppSelector((state) => state.itemUser);

  async function saveForm(event: FormEvent) {
    event.preventDefault();
    const data = {
      id: item.id,
      itemForm: JSON.stringify(itemForm),
    };
    try {
      const form = await axios(patchUser(updateItemFormURL, data));
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
    const itemArray: Array<IForm> = itemForm;
    dispatch(updateItemFormUser(addForm(itemArray, newField)));

    setNewField("");
    setFieldDisabled(false);
  }

  function deleteFieldState(event: SyntheticEvent, deleteKey: string) {
    event.preventDefault();
    const itemArray: Array<IForm> = itemForm;
    dispatch(updateItemFormUser(deleteForm(itemArray, deleteKey)));
  }

  return (
    <Fragment>
      <AddItemFieldView
        addFieldState={addFieldState}
        fieldHandler={fieldHandler}
        fieldDisabled={fieldDisabled}
        newField={newField}
      />
      <ItemFormBtnView
        deleteFieldState={deleteFieldState}
        setIsEdit={props.setIsEdit}
        saveForm={saveForm}
      />
    </Fragment>
  );
}
export default EditItemForm;
