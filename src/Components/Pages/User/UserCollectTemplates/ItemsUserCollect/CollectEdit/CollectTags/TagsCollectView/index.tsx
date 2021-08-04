import React, {Fragment, SyntheticEvent} from "react";
import {TagStyle} from "../../../../../../../../CSS/GlobalCSS/globalCSS";
import {useAppSelector} from "../../../../../../../../Utils/Redux/ReduxHook";

interface Props {
  removeTag: (event: SyntheticEvent, tagRemove: string) => void;
}
function TagsCollectView(props: Props) {
  const collectTags = useAppSelector((state) => state.tagsCollectUser);
  const tags = Object.values(collectTags).map((tag) => (
    <li>
      <button onClick={(event) => props.removeTag(event, tag.tagName)}>
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
