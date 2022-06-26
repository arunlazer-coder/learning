import React from "react";
import { useSelector } from "react-redux";

export const LikesAndComments = () => {
  const tot = useSelector( state => state.redux.likes + state.redux.numComments);

  return <div>number of likes and comments:{tot}</div>;
};
