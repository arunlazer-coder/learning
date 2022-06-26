import React, {useState, useRef, useMomo} from "react";

export const Comment = React.memo(() => {
  const [comment, setComment] = useState(0);
  const renders = useRef(0);

  return (
    <>
      <button onClick={() => setComment(comment + 1)}>
        increment numComments
      </button>
      <pre>comments:{comment}</pre>
      <div>comment component renders: {renders.current++}</div>
    </>
  );
})
