import {IKey} from "../../../../Utils/Components/ITGlobal";

export function addField(form: object, key: string): string {
  const addKey: IKey = {};
  addKey[key] = "";
  const newForm = {...form, ...addKey};
  return JSON.stringify(newForm);
}

export function deleteField(form: any, deleteKey: string): string {
  const objState: IKey = form;
  const deleteObj = Object.keys(objState).reduce((object: IKey, key) => {
    if (key !== deleteKey) {
      object[key] = form[key];
    }
    return object;
  }, {});
  return JSON.stringify(deleteObj);
}
