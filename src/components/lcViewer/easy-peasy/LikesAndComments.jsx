import React from "react";
import { useStoreState } from "easy-peasy";

export const LikesAndComments = () => {
  const likesAndComments = useStoreState(
    state => state.data.likes + state.data.numComments
  );

  return <div>number of likes and comments: {likesAndComments}</div>;
};
