import React, {Fragment, SyntheticEvent} from "react";
import {TagStyle} from "../../../../../../../../CSS/GlobalCSS/globalCSS";
import {ITag} from "../../../../../../../../Utils/basicInterfaces";
import {useAppSelector} from "../../../../../../../../Utils/Redux/ReduxHook";

interface Props {
  removeTag: (event: SyntheticEvent, tagRemove: ITag) => void;
}
function TagsCollectView(props: Props) {
  const collectTags = useAppSelector((state) => state.tagsCollectUser);
  const tags = Object.values(collectTags).map((tag) => (
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

export default TagsCollectView;
