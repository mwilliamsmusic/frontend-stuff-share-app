import {IKey} from "../../../../Utils/Components/ITGlobal";

export function addField(form: object, key: string): object {
  const addKey: IKey = {};
  addKey[key] = "";
  const newForm = {...form, ...addKey};
  return newForm;
}
