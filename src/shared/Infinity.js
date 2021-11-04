/* eslint-disable */
import React, { useEffect, useCallback } from "react";
import _ from "lodash";
import { postActions } from "../redux/modules/post";
import { useSelector, useDispatch } from "react-redux";

const Infinity = (props) => {
  const { children, callNext, paging, is_loading, is_next } = props;
  const is_mainPage = useSelector((state) => state.post.mainpage);
  console.log("이거 확인좀 해봐야겠네", is_mainPage);

  const _handleScroll = _.throttle(() => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    //1. 페이지 5페이지 이상으로 넘어감.
    if (scrollHeight - innerHeight - scrollTop < 200 && is_mainPage === true) {
      callNext();
    }
  }, 300);

  const handleScroll = useCallback(_handleScroll, []);

  useEffect(() => {
    if (is_loading) {
      return;
    }
    // if (is_mainPage === false) {
    //   return;
    // } else {
    //   console.log("????????????");
    // }

    if (is_mainPage === true) {
      console.log("지나갑니다");
      window.addEventListener("scroll", () => {
        handleScroll();
      });
    } else {
      console.log("끊겠습니다");
      // window.removeEventListener("scroll", () => {
      //   handleScroll();
      // });
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [paging]);
  return <div>{children}</div>;
};

Infinity.defaultProps = {
  chidlren: null,
  callNext: () => {},
  is_loading: false,
};

export default Infinity;
