import React, {Fragment, useState} from "react";
import {CenterContent, PageContainer} from "../../../../../../../CSS/globalCSS";
import FormCollectView from "./FormCollectView";

interface Props {
  deleteFormKey: (key: string) => void;
  addFormKey: (key: string) => void;
}

function CollectForm(props: Props) {
  const [isForm, setIsForm] = useState<boolean>(false);

  function formState() {
    setIsForm(!isForm);
  }

  return (
    <Fragment>
      <h2>Edit Collection Form</h2>
      {isForm ? (
        <FormCollectView
          formState={formState}
          deleteFormKey={props.deleteFormKey}
          addFormKey={props.addFormKey}
        />
      ) : (
        <button onClick={formState}>Item Form</button>
      )}
    </Fragment>
  );
}

export default CollectForm;
