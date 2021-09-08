import React, {Fragment} from "react";
import {IForm} from "../../../basicInterfaces";

interface Props {
  fields: Array<IForm>;
}

function FieldView(props: Props) {
  const fieldList =
    props.fields &&
    Object.values(props.fields).map((field: any) => (
      <li key={field.name}>
        <h3>
          {field.name} {field.value}
        </h3>
      </li>
    ));
  return <Fragment>{fieldList}</Fragment>;
}
export default FieldView;
