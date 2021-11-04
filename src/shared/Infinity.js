/* eslint-disable */
import React, { useEffect, useCallback } from "react";
import _ from "lodash";
import { postActions } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";

const Infinity = (props) => {
  const { children, callNext, paging, is_loading, is_next } = props;
  const is_mainPage = useSelector((state) => state.post.mainpage);
  // console.log("이거 확인좀 해봐야겠네", props);

  const _handleScroll = _.throttle(() => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    //1. 페이지 5페이지 이상으로 넘어감.
    if (scrollHeight - innerHeight - scrollTop < 300) {
      callNext();
    }
  }, 600);

  const handleScroll = useCallback(_handleScroll, []);

  useEffect(() => {
    if (is_loading) {
      return;
    }

    if (is_mainPage === true) {
      window.addEventListener("scroll", () => {
        handleScroll();
      });
    } else {
      console.log("여기서 막힘?");
      window.removeEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [paging, is_mainPage]);
  return <div>{children}</div>;
};

Infinity.defaultProps = {
  chidlren: null,
  callNext: () => {},
  is_loading: false,
};

export default Infinity;
