import React, {useState} from "react";
import {CenterContent, PageContainer} from "../../../../../../../CSS/globalCSS";
import FormCollectDisplay from "./FormCollectDisplay";

interface Props {
  deleteFormKey: (key: string) => void;
  addFormKey: (key: object, e: React.FormEvent) => void;
}

function CollectForm(props: Props) {
  const [isForm, setIsForm] = useState<boolean>(false);

  function formState() {
    setIsForm(!isForm);
  }
  return (
    <CenterContent>
      <PageContainer>
        <h2>Edit Collection Form</h2>
        {isForm ? (
          <FormCollectDisplay
            formState={formState}
            deleteFormKey={props.deleteFormKey}
            addFormKey={props.addFormKey}
          />
        ) : (
          <button onClick={formState}>Item Form</button>
        )}
      </PageContainer>
    </CenterContent>
  );
}

export default CollectForm;
