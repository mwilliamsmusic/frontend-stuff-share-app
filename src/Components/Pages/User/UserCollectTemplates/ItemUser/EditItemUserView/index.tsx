import React, {Dispatch, Fragment, SetStateAction, SyntheticEvent} from "react";
import {StdBtn, StdForm} from "../../../../../../CSS/GlobalCSS/globalCSS";
import {BLUE, PINK} from "../../../../../../CSS/GlobalCSS/typesGlobalCSS";
import {useAppSelector} from "../../../../../../Utils/Redux/ReduxHook";
import ItemFormBtnView from "./ItemFormBtnView";

interface Props {
  addFieldState: (event: SyntheticEvent) => void;
  deleteFieldState: (event: SyntheticEvent, deleteKey: string) => void;
  updateFieldState: (event: SyntheticEvent, field: string) => void;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
  saveForm: () => void;
  fieldHandler: (field: string) => void;
  fieldDisabled: boolean;
  newField: string;
  valueField: string;
  valueHandler: (value: string) => void;
  uploadItemImage: (e: React.FormEvent<HTMLFormElement>, file: any) => void;
}

function EditItemUserView(props: Props) {
  const collectForm = useAppSelector((state) => state.collectFormUser);
  const itemInfo = useAppSelector((state) => state.itemUser);

  const formList = collectForm.map((form) => (
    <li key={form.field}>
      <ItemFormBtnView
        field={form.field}
        deleteFieldState={props.deleteFieldState}
        value={form.value}
        valueHandler={props.valueHandler}
        updateFieldState={props.updateFieldState}
        valueField={props.valueField}
      />
    </li>
  ));
  return (
    <Fragment>
      <h2> Edit {itemInfo.title}</h2>
      <ul>{formList}</ul>
      <StdForm
        onSubmit={(event) => {
          props.addFieldState(event);
        }}
      >
        <label htmlFor="add-form-field">
          Add Field:
          <input
            type="text"
            id="field-name"
            value={props.newField}
            onChange={(e) => {
              props.fieldHandler(e.target.value);
            }}
          />
        </label>

        <StdBtn bgColor={PINK} type="submit" disabled={props.fieldDisabled}>
          Add
        </StdBtn>
      </StdForm>
      <StdBtn bgColor={PINK} onClick={props.saveForm}>
        Save
      </StdBtn>
    </Fragment>
  );
}

export default EditItemUserView;
