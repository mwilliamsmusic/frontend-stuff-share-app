import React, {useState} from "react";
import {
  CenterContent,
  PageContainer,
} from "../../../../../../../CSS/GlobalCSS/globalCSS";
import {useAppSelector} from "../../../../../../../Utils/Redux/ReduxHook";
import EditItemForm from "./EditItemForm";

function ItemForm() {
  const itemInfo = useAppSelector((state) => state.itemUser);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <CenterContent>
      <PageContainer>
        <h2>Edit {itemInfo.title} Form</h2>
        {isEdit ? (
          <EditItemForm setIsEdit={setIsEdit} />
        ) : (
          <button onClick={() => setIsEdit(true)}>Item Form</button>
        )}
      </PageContainer>
    </CenterContent>
  );
}

export default ItemForm;
