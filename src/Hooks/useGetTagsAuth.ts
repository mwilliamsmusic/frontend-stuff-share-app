import axios from "axios";
import React, {useEffect} from "react";
import {postUser} from "../Components/Pages/User/Utils/axiosUserConfig";
import {
  ICollectTagsUser,
  updateTagsCollectUser,
} from "../Utils/Redux/Modules/user/tagsCollectUserSlice";
import {useAppDispatch} from "../Utils/Redux/ReduxHook";
import {getAllCollectTagURL} from "../Utils/URL/apiURL";

export async function useGetTagsAuth(id: BigInt, type: string) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getTags() {
      if (type === "collect") {
        const data = {collectId: id};
        try {
          const allTags = await axios(postUser(getAllCollectTagURL, data));
          const collectTags: Array<ICollectTagsUser> = allTags.data;
          dispatch(updateTagsCollectUser(collectTags));
        } catch (error) {}
      }
    }
    getTags();
  }, []);
}
