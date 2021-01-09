import {connect, ConnectedProps} from "react-redux";
import {UserCollectState, COLLECT_OBJECT, CollectObjectAction} from "./types";

const mapState = (state: UserCollectState) => ({
  userCollectObj: state,
});

const mapDispatch = {
  getUserObject: (payload: any) => ({type: COLLECT_OBJECT, payload: payload}),
};

export const connector = connect(mapState, mapDispatch);

// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
export type UserPropsFromRedux = ConnectedProps<typeof connector>;
