import React, {useRef, useState, useMemo} from "react";
import { Comment } from "./comment";

export function MemoHook() {
  const renders = useRef(0);
  const [like, setLike] = useState(0)
  return (
    <div>
      <button onClick={() => setLike(like+1)}>increment likes</button>
      <pre>likes:{like}</pre>
      <div>Likes component renders: {renders.current++}</div>
      <Comment />
    </div>
  );
}
