import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "./contentSlice";

function Content() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);
  const contents = useSelector((state) => state.content.contents); // subscribe to
  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);

  if (isLoading) {
    return "loading...";
  }
  if (error) {
    return error;
  }

  return (
    <div className="grid gap-4 grid-cols-2  md:grid-cols-4 lg:grid-cols-8  p-4">
      {contents.map((content) => (
        <div key={content.id}>
          <img
            src={`${content.thumbnailUrl}`}
            alt={`${content.title}`}
            className="w-full h-full rounded"
          />
        </div>
      ))}
    </div>
  );
}

export default Content;
