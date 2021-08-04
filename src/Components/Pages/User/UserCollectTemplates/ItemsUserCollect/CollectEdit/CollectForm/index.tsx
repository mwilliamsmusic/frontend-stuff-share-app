import React, {Dispatch, SetStateAction, SyntheticEvent, useState} from "react";
import {
  CenterContent,
  PageContainer,
} from "../../../../../../../CSS/GlobalCSS/globalCSS";
import {useAppSelector} from "../../../../../../../Utils/Redux/ReduxHook";
import EditCollectForm from "./EditCollectForm";

function CollectForm() {
  const collectInfo = useAppSelector((state) => state.collectUser);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  //
  return (
    <CenterContent>
      <PageContainer>
        <h2>Edit {collectInfo.title} Form</h2>
        {isEdit ? (
          <EditCollectForm setIsEdit={setIsEdit} />
        ) : (
          <button onClick={() => setIsEdit(true)}>Item Form</button>
        )}
      </PageContainer>
    </CenterContent>
  );
}

export default CollectForm;
