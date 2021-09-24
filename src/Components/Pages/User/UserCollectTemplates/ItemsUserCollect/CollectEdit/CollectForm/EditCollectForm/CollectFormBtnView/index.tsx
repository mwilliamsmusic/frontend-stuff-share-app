import React, {
  Dispatch,
  FormEvent,
  Fragment,
  SetStateAction,
  SyntheticEvent,
} from "react";
import {StdBtn} from "../../../../../../../../../CSS/buttonsCSS";
import {
  FLFieldArea,
  FLValueArea,
  GridFormList,
} from "../../../../../../../../../CSS/formListCSS";
import {
  Spacer,
  UnorderListStyle,
} from "../../../../../../../../../CSS/GlobalCSS/globalCSS";
import {
  BLUE,
  GREEN,
  RED,
} from "../../../../../../../../../CSS/GlobalCSS/typesGlobalCSS";
import {StandardList} from "../../../../../../../../../CSS/listsCSS";
import {useAppSelector} from "../../../../../../../../../Utils/Redux/ReduxHook";

interface Props {
  deleteFieldState: (event: SyntheticEvent, field: string) => void;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  saveForm: (event: FormEvent) => void;
}

function CollectFormBtnView(props: Props) {
  const collectForm = useAppSelector((state) => state.collectFormUser);
  const formList =
    collectForm &&
    Object.values(collectForm).map((form: any) => (
      <li key={form.field}>
        <GridFormList>
          <FLFieldArea>{form.field}</FLFieldArea>
          <FLValueArea>
            <StdBtn
              backgroundColor={RED}
              onClick={(event) => {
                props.deleteFieldState(event, form.field);
              }}
            >
              Delete Field
            </StdBtn>
          </FLValueArea>
        </GridFormList>
        <Spacer height="5px" />
      </li>
    ));
  return (
    <StandardList>
      <ul>{formList}</ul>
      <StdBtn
        backgroundColor={GREEN}
        onClick={(event) => props.saveForm(event)}
      >
        Save Form
      </StdBtn>
      <StdBtn backgroundColor={BLUE} onClick={() => props.setIsEdit(false)}>
        Close
      </StdBtn>
    </StandardList>
  );
}

export default CollectFormBtnView;
