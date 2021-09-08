import axios from "axios";
import React, {FormEvent, Fragment, SyntheticEvent, useState} from "react";
import {ITag} from "../../../../../../../Utils/basicInterfaces";
import {updateTagsCollectUser} from "../../../../../../../Utils/Redux/Modules/user/tagsCollectUserSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../Utils/Redux/ReduxHook";
import {
  addCollectTagURL,
  removeCollectTagURL,
} from "../../../../../../../Utils/URL/apiURL";
import {disableButton} from "../../../../../../../Utils/validation";
import {postUser} from "../../../../Utils/axiosUserConfig";
import {
  IRemoveCollectTag,
  IUserCollectTag,
} from "../../../../Utils/Interfaces/IUser";

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
    const newTags = tags;
    if (!newTags.some((tag) => tag.tagName == addTag)) {
      try {
        const data: IUserCollectTag = {collectId: collect.id, tagName: addTag};
        const tag = await axios(postUser(addCollectTagURL, data));

        const tagObj: ITag = tag.data;
        const newArr: Array<ITag> = [];
        newArr.push(tagObj);
        const dispatchArray: Array<ITag> = [...newTags, ...newArr];
        dispatch(updateTagsCollectUser(dispatchArray));
      } catch (error) {}
    }
    setAddTag("");
    setDisabledTag(false);
  }

  async function removeTag(event: SyntheticEvent, tagRemove: ITag) {
    event.preventDefault();
    try {
      const data: IRemoveCollectTag = {
        id: tagRemove.id,
        collectId: collect.id,
      };
      const tagPost = await axios(postUser(removeCollectTagURL, data));

      const newArr: Array<ITag> = tags.filter((key) => key.id !== tagRemove.id);

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
