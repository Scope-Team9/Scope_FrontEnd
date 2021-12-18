/* eslint-disable */
import { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router";

const useScrollMove = (dom) => {
  const history = useHistory();
  const [scrollInfos, setScrollInfos] = useState(() =>
    localStorage.getItem("scroll_pos")
  );

  // 원본은 object지만 해당 코드는 object가 아니라서 number로 강제
  // "0" || 0이 line 15 조건문을 통과하지 못함
  // (||연산자에 의해 string "0"이 되기 때문)
  const scrollTop = parseInt(scrollInfos, 0) || 0;

  // -- 값이 존재할 경우 scroll 이동
  const scrollMove = () => {
    if (!scrollInfos && scrollInfos !== 0) {
      return;
    }
    localStorage.removeItem("scroll_pos");
    setScrollInfos(localStorage.getItem("scroll_pos"));
    window.scrollTo(0, scrollTop);
  };

  const scrollOnceMove = useCallback(scrollMove, [scrollTop]);

  const scrollSave = () => {
    const scrollPos = dom ? dom.scrollTop : window.scrollY;
    return localStorage.setItem("scroll_pos", scrollPos);
  };

  // react router 이동시 저장
  // history.goBack() 일경우에는 발생 X
  useEffect(() => {
    const listen = history.listen(scrollSave);
    return () => {
      // 이벤트 제거
      listen();
    };
  });

  return { scrollMove, scrollOnceMove, scrollSave };
};

export default useScrollMove;
