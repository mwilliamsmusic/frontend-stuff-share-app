import React, {SyntheticEvent} from "react";
import {StdBtn, StdForm} from "../../../../../../../CSS/GlobalCSS/globalCSS";
import {PINK, RED} from "../../../../../../../CSS/GlobalCSS/typesGlobalCSS";
import {FieldFormArea, FormGrid, ViewFormArea} from "../../../../Utils/userCSS";

interface Props {
  field: string;
  deleteFieldState: (event: SyntheticEvent, deleteKey: string) => void;
  value: string;
  valueField: string;
  valueHandler: (value: string) => void;
  updateFieldState: (event: SyntheticEvent, field: string) => void;
}

function ItemFormBtnView(props: Props) {
  return (
    <FormGrid>
      <FieldFormArea>
        {props.field}:{props.value}
        <StdForm
          onSubmit={(event) => {
            props.updateFieldState(event, props.field);
          }}
        >
          <label htmlFor="add-value-field">
            <input
              type="text"
              id="field-name"
              value={props.valueField}
              placeholder={props.value}
              onChange={(e) => {
                props.valueHandler(e.target.value);
              }}
            />
          </label>

          <StdBtn bgColor={PINK} type="submit">
            Update
          </StdBtn>
        </StdForm>
      </FieldFormArea>
      <ViewFormArea>
        <StdBtn
          bgColor={RED}
          onClick={(event) => {
            props.deleteFieldState(event, props.field);
          }}
        >
          Delete Field
        </StdBtn>
      </ViewFormArea>
    </FormGrid>
  );
}

export default ItemFormBtnView;
