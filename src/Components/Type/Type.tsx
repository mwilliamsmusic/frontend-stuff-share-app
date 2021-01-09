import React from "react";
import {CenterContent, PageContainer, CenterHeading} from "../../CSS/globalCSS";
import {CollectContainer, ListStyle} from "./typeCSS";
import {connect, ConnectedProps} from "react-redux";
interface RootState {
  collectList: object;
}

const mapState = (state: RootState) => ({
  collectList: state.collectList,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

function Type(props: Props) {
  // Display Collections or Faves
  const listItem =
    props.collectList &&
    Object.values(props.collectList).map((collect: any) => (
      <li key={collect.id}>
        <CollectContainer>{collect.title}</CollectContainer>
      </li>
    ));
  return (
    <div>
      <CenterHeading>Collects</CenterHeading>
      <ListStyle>{listItem}</ListStyle>
    </div>
  );
}

export default connector(Type);
