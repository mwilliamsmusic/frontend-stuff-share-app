import React, {useState, useEffect, Fragment} from "react";
import axios, {AxiosError, AxiosResponse} from "axios";
import {
  createCoolURL,
  getAllUserCollectsURL,
  postUserCollectURL,
} from "../../../../../Utils/URL/apiURL";
import {ICreateCollect} from "../../Utils/Interfaces/ICollectUser";
import {getAllUser, postUser} from "../../Utils/axiosUserConfig";
import CreateCollectView from "./CreateCollectView";

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
import {IId} from "../../../../../Utils/basicInterfaces";
import AllCollects from "./AllCollects";

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
  async function postCollect() {
    const request: ICreateCollect = {
      title: collectTitle,
    };
    try {
      const createCollect = await axios(postUser(postUserCollectURL, request));
      const data: IId = {
        id: createCollect.data.collectId,
      };
      const createCool = await axios(postUser(createCoolURL, data));
    } catch (err) {}
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
      <AllCollects />
    </Fragment>
  );
}

export default UserCollect;
