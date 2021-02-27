import React, {Dispatch, Fragment, SetStateAction, useState} from "react";
import {CenterContent, PageContainer} from "../../../../../../CSS/globalCSS";
import EditDisplayView from "./EditDisplayView";
import ItemDisplayView from "./ItemDisplayView";

interface Props {
  saveForm: () => void;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  patchItemForm: (formObj: object) => void;
}

function Item(props: Props) {
  return (
    <CenterContent>
      <PageContainer>
        {props.isEdit ? (
          <EditDisplayView
            isEdit={props.isEdit}
            setIsEdit={props.setIsEdit}
            saveForm={props.saveForm}
            updateItemForm={props.patchItemForm}
          />
        ) : (
          <ItemDisplayView isEdit={props.isEdit} setIsEdit={props.setIsEdit} />
        )}
      </PageContainer>
    </CenterContent>
  );
}

export default Item;
