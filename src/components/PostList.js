/* eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";

const PostList = () => {
  React.useEffect(() => {
    dispatch(productActions.getPostAPI());
  }, []);

  const product_list = useSelector((state) => state.post);

  return (
    <React.Fragment>
      <div>
        {product_list.map((p, idx) => (
          <Post key={idx} {...p} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default PostList;
