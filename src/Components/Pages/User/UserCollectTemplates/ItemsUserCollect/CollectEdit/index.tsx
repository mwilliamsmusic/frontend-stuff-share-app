import React from "react";
import {
  CenterContent,
  PageContainer,
  Spacer,
} from "../../../../../../CSS/globalCSS";
import CollectForm from "./CollectForm";
import CollectImageView from "./CollectImageView";

interface Props {
  deleteFormKey: (key: string) => void;
  addFormKey: (key: string) => void;
  uploadCollectImg: (e: React.FormEvent<HTMLFormElement>, file: any) => void;
}

function CollectEdit(props: Props) {
  return (
    <CenterContent>
      <PageContainer>
        <CollectImageView uploadCollectImg={props.uploadCollectImg} />
        <Spacer height="100px" />
        <CollectForm
          deleteFormKey={props.deleteFormKey}
          addFormKey={props.addFormKey}
        />
      </PageContainer>
    </CenterContent>
  );
}

export default CollectEdit;
