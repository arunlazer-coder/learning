import React, { useRef } from "react";
import { useSelector } from "react-redux";

export const Likes = React.memo(() => {
  const {likes} = useSelector(state => state.redux);

  const renders = useRef(0);
  return (
    <div>
      <div>number of likes: {likes}</div>
      <div>Likes component renders: {renders.current++}</div>
    </div>
  );
});
