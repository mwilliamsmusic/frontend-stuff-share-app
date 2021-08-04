import axios, {AxiosError, AxiosResponse} from "axios";
import React, {
  FormEvent,
  Fragment,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import {
  ICollectTagsUser,
  updateTagsCollectUser,
} from "../../../../../../../Utils/Redux/Modules/user/tagsCollectUserSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../Utils/Redux/ReduxHook";
import {
  addCollectTagURL,
  getAllCollectTagURL,
  removeCollectTagURL,
} from "../../../../../../../Utils/URL/apiURL";
import {disableButton} from "../../../../../../../Utils/validation";
import {getAllUser, postUser} from "../../../../Utils/axiosUserConfig";
import AddTagView from "./AddTagView";
import TagsCollectView from "./TagsCollectView";

function CollectTags() {
  const collect = useAppSelector((state) => state.collectUser);
  const [addTag, setAddTag] = useState<string>();

  const [disabledTag, setDisabledTag] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.tagsCollectUser);

  function addTagHandler(tag: string) {
    setAddTag(tag);
    setDisabledTag(disableButton(tag));
  }

  async function postTag(event: FormEvent) {
    event.preventDefault();

    if (!tags.some((tag) => tag.tagName == addTag)) {
      try {
        const data = {tagName: addTag, collectId: collect.collectId};
        const tag = await axios(postUser(addCollectTagURL, data));

        const tagObj: ICollectTagsUser = {tagName: addTag};
        const newArr: Array<ICollectTagsUser> = [];
        newArr.push(tagObj);
        const dispatchArray: Array<ICollectTagsUser> = [...tags, ...newArr];
        dispatch(updateTagsCollectUser(dispatchArray));
      } catch (error) {}
    }
    setAddTag("");
    setDisabledTag(false);
  }

  async function removeTag(event: SyntheticEvent, tagRemove: string) {
    event.preventDefault();
    try {
      const data = {tagName: tagRemove, collectId: collect.collectId};
      const tagPost = await axios(postUser(removeCollectTagURL, data));

      const newArr: Array<ICollectTagsUser> = tags.filter(
        (key) => key.tagName !== tagRemove
      );

      dispatch(updateTagsCollectUser(newArr));
    } catch (error) {}
  }

  return (
    <Fragment>
      <TagsCollectView removeTag={removeTag} />
      <AddTagView
        addTagHandler={addTagHandler}
        disabledTag={disabledTag}
        addTag={addTag}
        postTag={postTag}
      />
    </Fragment>
  );
}
export default CollectTags;
