import React, {Dispatch, Fragment, SetStateAction, SyntheticEvent} from "react";
import {
  StdBtn,
  UnorderListStyle,
} from "../../../../../../../../../CSS/GlobalCSS/globalCSS";
import {
  BLUE,
  GREEN,
  RED,
} from "../../../../../../../../../CSS/GlobalCSS/typesGlobalCSS";
import {useAppSelector} from "../../../../../../../../../Utils/Redux/ReduxHook";
import {
  FieldFormArea,
  FormGrid,
  ViewFormArea,
} from "../../../../../../Utils/userCSS";

interface Props {
  deleteFieldState: (event: SyntheticEvent, field: string) => void;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}
function CollectFormBtnView(props: Props) {
  const collectForm = useAppSelector((state) => state.collectFormUser);
  const formList =
    collectForm &&
    Object.values(collectForm).map((form: any) => (
      <UnorderListStyle>
        <li key={form.name}>
          <FieldFormArea>{form.name}</FieldFormArea>
          <ViewFormArea>
            <StdBtn
              bgColor={RED}
              onClick={(event) => {
                props.deleteFieldState(event, form.name);
              }}
            >
              Delete Field
            </StdBtn>
          </ViewFormArea>
        </li>
      </UnorderListStyle>
    ));
  return (
    <FormGrid>
      <ul> {formList}</ul>
      <StdBtn bgColor={GREEN}>Save Form</StdBtn>
      <StdBtn bgColor={BLUE}>Close</StdBtn>
    </FormGrid>
  );
}

export default CollectFormBtnView;
