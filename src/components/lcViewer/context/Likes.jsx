import React, { useContext, useRef } from "react";
import { DataContext } from "./DataContext";

export const Likes = React.memo(() => {
  const { likes } = useContext(DataContext);
  const renders = useRef(0);
  return (
    <div>
      <div>number of likes: {likes}</div>
      <div>Likes component renders: {renders.current++}</div>
    </div>
  );
});
