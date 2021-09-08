import React, {SyntheticEvent} from "react";
import {TagStyle} from "../../../../../../../../CSS/GlobalCSS/globalCSS";
import {ITag} from "../../../../../../../../Utils/basicInterfaces";
import {useAppSelector} from "../../../../../../../../Utils/Redux/ReduxHook";

interface Props {
  removeTag: (event: SyntheticEvent, tagRemove: ITag) => void;
}
function TagsItemView(props: Props) {
  const itemTags = useAppSelector((state) => state.tagsItemUser);
  const tags = Object.values(itemTags).map((tag) => (
    <li>
      <button onClick={(event) => props.removeTag(event, tag)}>
        {tag.tagName}
      </button>
    </li>
  ));
  return (
    <TagStyle>
      <h2>Tags</h2>
      <ul>{tags}</ul>
    </TagStyle>
  );
}
export default TagsItemView;
