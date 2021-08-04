import React, {useState, useEffect, Fragment} from "react";
import axios, {AxiosError, AxiosResponse} from "axios";
import {
  getAllUserCollectsURL,
  postUserCollectURL,
} from "../../../../../Utils/URL/apiURL";
import {ICreateCollect} from "../../Utils/Interfaces/ICollectUser";
import {getAllUser, postUser} from "../../Utils/axiosUserConfig";
import CreateCollectView from "./CreateCollectView";

//import {disableButton} from "../../../../../Utils/validation";
import AllCollectsView from "./AllCollectsView";
import {Spacer} from "../../../../../CSS/GlobalCSS/globalCSS";
import {disableButton} from "../../../../../Utils/validation";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Utils/Redux/ReduxHook";
import {
  IAllCollectsUser,
  updateAllCollectsUser,
} from "../../../../../Utils/Redux/Modules/user/allCollectsUserSlice";
import {
  ICollectTagsUser,
  updateTagsCollectUser,
} from "../../../../../Utils/Redux/Modules/user/tagsCollectUserSlice";

function UserCollect() {
  const [collectTitle, setCollectTitle] = useState<string>("");
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  // Gets all user collections
  function getAllCollects() {
    axios(getAllUser(getAllUserCollectsURL)).then(
      (res: AxiosResponse) => {
        const collects: Array<IAllCollectsUser> = res.data;
        dispatch(updateAllCollectsUser(collects));
      },
      (err: AxiosError) => {}
    );
  }
  // Create title handler
  function createTitle(title: string) {
    setCollectTitle(title);
    setSubmitDisabled(disableButton(title));
  }
  // Create collect with title
  function postCollect() {
    const request: ICreateCollect = {
      title: collectTitle,
    };
    axios(postUser(postUserCollectURL, request)).then(
      (res: AxiosResponse) => {},
      (err: AxiosError) => {}
    );
    setCollectTitle("");
  }

  useEffect(() => {
    getAllCollects();
  }, []);

  return (
    <Fragment>
      <CreateCollectView
        collectTitle={collectTitle}
        submitDisabled={submitDisabled}
        createTitle={createTitle}
        postCollect={postCollect}
      />
      <Spacer height="50px" />
      <AllCollectsView />
    </Fragment>
  );
}

export default UserCollect;
