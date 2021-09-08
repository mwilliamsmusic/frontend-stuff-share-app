import {IForm} from "../../../../Utils/basicInterfaces";

export function addForm(
  inputForm: Array<IForm>,
  newField: string
): Array<IForm> {
  if (inputForm !== null) {
    if (!inputForm.some((form) => form.field === newField)) {
      const fieldObj: IForm = {field: newField, value: ""};
      const updatedArray: Array<IForm> = [];
      updatedArray.push(fieldObj);
      const mergeState: Array<IForm> = [...inputForm, ...updatedArray];
      return mergeState;
    }
  } else {
    const fieldObj: IForm = {field: newField, value: ""};
    const updatedArray: Array<IForm> = [];
    updatedArray.push(fieldObj);
    return updatedArray;
  }
}

export function deleteForm(
  formArray: Array<IForm>,
  deleteKey: string
): Array<IForm> {
  const deleteArray: Array<IForm> = formArray.filter(
    (key) => key.field !== deleteKey
  );
  return deleteArray;
}
