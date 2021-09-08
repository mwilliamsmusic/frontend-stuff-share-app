import React, {
  Dispatch,
  FormEvent,
  Fragment,
  SetStateAction,
  SyntheticEvent,
} from "react";
import {
  GradientBoarder,
  Spacer,
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
  EditFormContainer,
  EditFormGrid,
  FieldEditFormArea,
  ViewEditFormArea,
} from "../../../../../../Utils/userCSS";

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
      <Fragment>
        <EditFormGrid>
          <FieldEditFormArea>{form.field}</FieldEditFormArea>
          <ViewEditFormArea>
            <StdBtn
              bgColor={RED}
              onClick={(event) => {
                props.deleteFieldState(event, form.field);
              }}
            >
              Delete Field
            </StdBtn>
          </ViewEditFormArea>
        </EditFormGrid>
        <Spacer height="5px" />
      </Fragment>
    ));
  return (
    <Fragment>
      <EditFormContainer>
        <UnorderListStyle> {formList} </UnorderListStyle>
      </EditFormContainer>
      <StdBtn bgColor={GREEN} onClick={(event) => props.saveForm(event)}>
        Save Form
      </StdBtn>
      <StdBtn bgColor={BLUE} onClick={() => props.setIsEdit(false)}>
        Close
      </StdBtn>
    </Fragment>
  );
}

export default CollectFormBtnView;
