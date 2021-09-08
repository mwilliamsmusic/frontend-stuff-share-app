import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  SyntheticEvent,
  useState,
} from "react";
import {
  CenterContent,
  PageContainer,
  StdBtn,
} from "../../../../../../../CSS/GlobalCSS/globalCSS";
import {BLUE, PINK} from "../../../../../../../CSS/GlobalCSS/typesGlobalCSS";
import {useAppSelector} from "../../../../../../../Utils/Redux/ReduxHook";
import EditCollectForm from "./EditCollectForm";

function CollectForm() {
  const collectInfo = useAppSelector((state) => state.collectUser);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  //
  return (
    <Fragment>
      <h2>Edit Info Form</h2>
      {isEdit ? (
        <EditCollectForm setIsEdit={setIsEdit} />
      ) : (
        <StdBtn bgColor={BLUE} onClick={() => setIsEdit(true)}>
          Collect Form
        </StdBtn>
      )}
    </Fragment>
  );
}

export default CollectForm;
