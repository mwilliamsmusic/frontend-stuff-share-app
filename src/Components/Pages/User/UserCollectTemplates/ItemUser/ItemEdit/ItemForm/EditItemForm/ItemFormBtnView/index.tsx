import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  SyntheticEvent,
} from "react";
import {StdBtn} from "../../../../../../../../../CSS/buttonsCSS";
import {UnorderListStyle} from "../../../../../../../../../CSS/GlobalCSS/globalCSS";
import {
  BLUE,
  GREEN,
  RED,
} from "../../../../../../../../../CSS/GlobalCSS/typesGlobalCSS";
import {useAppSelector} from "../../../../../../../../../Utils/Redux/ReduxHook";
import {
  EditFormGrid,
  FieldEditFormArea,
  ViewEditFormArea,
} from "../../../../../../Utils/userCSS";

interface Props {
  deleteFieldState: (event: SyntheticEvent, field: string) => void;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  saveForm: (event: FormEvent) => void;
}

function ItemFormBtnView(props: Props) {
  const itemForm = useAppSelector((state) => state.itemFormUser);
  const formList =
    itemForm &&
    Object.values(itemForm).map((form: any) => (
      <UnorderListStyle>
        <li key={form.field}>
          <FieldEditFormArea>{form.field}</FieldEditFormArea>
          <ViewEditFormArea>
            <StdBtn
              backgroundColor={RED}
              onClick={(event) => {
                props.deleteFieldState(event, form.field);
              }}
            >
              Delete Field
            </StdBtn>
          </ViewEditFormArea>
        </li>
      </UnorderListStyle>
    ));
  return (
    <EditFormGrid>
      <ul> {formList}</ul>
      <StdBtn
        backgroundColor={GREEN}
        onClick={(event) => props.saveForm(event)}
      >
        Save Form
      </StdBtn>
      <StdBtn backgroundColor={BLUE} onClick={() => props.setIsEdit(false)}>
        Close
      </StdBtn>
    </EditFormGrid>
  );
}

export default ItemFormBtnView;
