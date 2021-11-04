import React, { useEffect, useCallback } from "react";
import _ from "lodash";

const Infinity = (props) => {
  const { children, callNext, paging, is_loading } = props;
  console.log(props);

  const _handleScroll = _.throttle(() => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    //1. 페이지 5페이지 이상으로 넘어감.
    if (scrollHeight - innerHeight - scrollTop < 200) {
      callNext();
    }
  }, 300);

  const handleScroll = useCallback(_handleScroll, []);

  useEffect(() => {
    if (is_loading) {
      return;
    }

    if (paging.next < 5) {
      window.addEventListener("scroll", () => {
        handleScroll();
      });
    } else {
      window.removeEventListener("scroll", handleScroll);
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
