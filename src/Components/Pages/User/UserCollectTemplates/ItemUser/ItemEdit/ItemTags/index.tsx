import axios from "axios";
import React, {FormEvent, Fragment, SyntheticEvent, useState} from "react";
import {ITag} from "../../../../../../../Utils/basicInterfaces";
import {updateTagsCollectUser} from "../../../../../../../Utils/Redux/Modules/user/tagsCollectUserSlice";
import {updateTagsItemUser} from "../../../../../../../Utils/Redux/Modules/user/tagsItemUserSlice";

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
import {IRemoveItemTag, IUserItemTag} from "../../../../Utils/Interfaces/IUser";
import AddTagView from "../../../ItemsUserCollect/CollectEdit/CollectTags/AddTagView";
import TagsCollectView from "../../../ItemsUserCollect/CollectEdit/CollectTags/TagsCollectView";

function ItemTags() {
  const item = useAppSelector((state) => state.itemUser);
  const [addTag, setAddTag] = useState<string>();

  const [disabledTag, setDisabledTag] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.tagsItemUser);

  function addTagHandler(tag: string) {
    setAddTag(tag);
    setDisabledTag(disableButton(tag));
  }

  async function postTag(event: FormEvent) {
    event.preventDefault();
    const newTags = tags;
    if (!newTags.some((tag) => tag.tagName == addTag)) {
      try {
        const data: IUserItemTag = {tagName: addTag, itemId: item.id};
        const tag = await axios(postUser(addCollectTagURL, data));

        const tagObj: ITag = tag.data;
        const newArr: Array<ITag> = [];
        newArr.push(tagObj);
        const dispatchArray: Array<ITag> = [...newTags, ...newArr];
        dispatch(updateTagsItemUser(dispatchArray));
      } catch (error) {}
    }
    setAddTag("");
    setDisabledTag(false);
  }

  async function removeTag(event: SyntheticEvent, tagRemove: ITag) {
    event.preventDefault();
    try {
      const data: IRemoveItemTag = {
        id: tagRemove.id,
        itemId: item.id,
      };
      const tagPost = await axios(postUser(removeCollectTagURL, data));

      const newArr: Array<ITag> = tags.filter((key) => key.id !== tagRemove.id);

      dispatch(updateTagsItemUser(newArr));
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
export default ItemTags;
