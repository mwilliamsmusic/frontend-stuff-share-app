import React, {useState} from "react";
import {
  CenterContent,
  PageContainer,
  StdBtn,
  StdForm,
} from "../../../../../../CSS/globalCSS";
import {BLUE, GREEN} from "../../../../../../CSS/ITGlobalCSS";

interface Props {
  addFormField: (key: string) => void;
}

function AddFieldView(props: Props) {
  const [addKey, setAddKey] = useState<string>();
  return (
    <CenterContent>
      <PageContainer>
        <StdForm>
          <h2>Add Item Field</h2>
          <label htmlFor="add-item-field">
            New Field:
            <input
              id="add-item-field"
              value={addKey}
              type="text"
              onChange={(e) => setAddKey(e.target.value)}
            />
            <StdBtn
              bgColor={GREEN}
              brdColor={BLUE}
              onClick={() => props.addFormField(addKey)}
            >
              Add
            </StdBtn>
          </label>
        </StdForm>
      </PageContainer>
    </CenterContent>
  );
}

export default AddFieldView;
