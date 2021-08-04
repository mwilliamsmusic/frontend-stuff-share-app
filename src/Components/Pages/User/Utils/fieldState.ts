import {IForm} from "./Interfaces/ICollectUser";

export function addField(
  formView: Array<IForm>,
  addField: string
): Array<IForm> {
  const check = formView.some((form) => form.field === addField);
  if (!check) {
    const fieldObj = {field: addField, value: ""} as IForm;
    const newArr: Array<IForm> = [];
    newArr.push(fieldObj);
    const mergeState: Array<IForm> = [...formView, ...newArr];
    return mergeState;
  }
}
