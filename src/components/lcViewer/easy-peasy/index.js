import React from "react";
import {
  useStoreState,
  useStoreActions
} from "easy-peasy";

import { Likes } from "./Likes";
import { LikesAndComments } from "./LikesAndComments";

export function EasyPeasyRedux() {
  const data = useStoreState(state => state.data);
  const {incrementNumComments, incrementLikes} = useStoreActions( actions => actions.data );

  return (
    <div>
      <button onClick={() => incrementLikes(1)}>increment likes</button>
      <button onClick={incrementNumComments}>increment numComments</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <LikesAndComments />
      <br />
      <Likes />
    </div>
  );
}
