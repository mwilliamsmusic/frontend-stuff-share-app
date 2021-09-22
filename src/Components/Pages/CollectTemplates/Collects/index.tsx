import axios from "axios";
import React, {Fragment, useEffect} from "react";
import {useParams} from "react-router-dom";
import {IUsername} from "../../../../Utils/basicInterfaces";
import {
  IAllCollects,
  updateAllCollects,
} from "../../../../Utils/Redux/Modules/collect/allCollectsSlice";
import {useAppDispatch} from "../../../../Utils/Redux/ReduxHook";
import {allCollectsUsernameURL} from "../../../../Utils/URL/apiURL";
import {postCollect} from "../Utils/axiosCollectConfig";
import CollectsView from "./CollectsView";

interface RouteParams {
  username: string;
}

function Collects() {
  const {username} = useParams<RouteParams>();
  const dispatch = useAppDispatch();

  async function getAllCollects() {
    const data: IUsername = {
      username: username,
    };
    try {
      const allCollects = await axios(
        postCollect(allCollectsUsernameURL, data)
      );
      const collects: Array<IAllCollects> = allCollects.data;
      dispatch(updateAllCollects(collects));
    } catch (error) {}
  }

  useEffect(() => {
    getAllCollects();
  }, []);

  return (
    <Fragment>
      <CollectsView username={username} />
    </Fragment>
  );
}

export default Collects;
