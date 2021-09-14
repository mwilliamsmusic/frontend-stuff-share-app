import React, {Fragment, useState} from "react";
import {StdBtn} from "../../../../../../../CSS/buttonsCSS";

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
        <StdBtn backgroundColor={BLUE} onClick={() => setIsEdit(true)}>
          Collect Form
        </StdBtn>
      )}
    </Fragment>
  );
}

export default CollectForm;
