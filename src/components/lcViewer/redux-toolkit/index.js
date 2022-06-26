import React from "react";

import { Likes } from "./Likes";
import { LikesAndComments } from "./LikesAndComments";
import { useSelector, useDispatch } from "react-redux";
import { incrementLikes, incrementNumComments } from "../../../reducer/reduxReducer";

export function ReduxToolKit() {
  const data = useSelector((state) => state.redux)
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(incrementLikes(1))}>increment likes</button>
      <button onClick={() => dispatch(incrementNumComments())}>increment numComments</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>``
      <LikesAndComments />
      <br />
      <Likes />
      </div>
  );
}
