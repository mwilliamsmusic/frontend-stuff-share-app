import React, {FormEvent} from "react";
import {
  StdBtn,
  StdForm,
} from "../../../../../../../../../CSS/GlobalCSS/globalCSS";
import {PINK} from "../../../../../../../../../CSS/GlobalCSS/typesGlobalCSS";

interface Props {
  addFieldState: (event: FormEvent) => void;
  newField: string;
  fieldHandler: (field: string) => void;
  fieldDisabled: boolean;
}

function AddCollectFieldView(props: Props) {
  return (
    <StdForm
      onSubmit={(event) => {
        props.addFieldState(event);
      }}
    >
      <label htmlFor="add-form-field">
        {`Add Field: `}
        <input
          type="text"
          id="field-name"
          value={props.newField}
          onChange={(event) => {
            props.fieldHandler(event.target.value);
          }}
        />
      </label>

      <StdBtn bgColor={PINK} type="submit" disabled={props.fieldDisabled}>
        Add
      </StdBtn>
    </StdForm>
  );
}

export default AddCollectFieldView;
