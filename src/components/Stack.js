/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { Grid } from "../elements/Index";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../redux/modules/post";
import { stackAction } from "../redux/modules/stack";
import LogoButton from "../elements/LogoButton";

const Stack = (props) => {
  const dispatch = useDispatch();
  // const stack = useSelector((state) => state.stack.stack);
  const stack2 = useSelector((state) => state.stack.stacks);
  //필터 클릭
  const [stackArr, setStackArr] = React.useState([
    {
      id: "Java",
      img: "/img/java.png",
      active: true,
      title: "Java",
    },
    {
      id: "JavaScript",
      img: "/img/javascript.png",
      active: true,
      title: "JavaScript",
    },
    {
      id: "Python",
      img: "/img/python.png",
      active: true,
      title: "Python",
    },
    {
      id: "Node",
      img: "/img/node.js.png",
      active: true,
      title: "Node.js",
    },
    {
      id: "React",
      img: "/img/react.png",
      active: true,
      title: "React",
    },
    {
      id: "C++",
      img: "/img/c__.png",
      active: true,
      title: "C++",
    },
    {
      id: "Flask",
      img: "/img/flask.png",
      active: true,
      title: "Flask",
    },
    {
      id: "Django",
      img: "/img/django.png",
      active: true,
      title: "Django",
    },
    {
      id: "Vue",
      img: "/img/vue.png",
      active: true,
      title: "Vue",
    },
    {
      id: "Spring",
      img: "/img/spring.png",
      active: true,
      title: "Spring",
    },
    {
      id: "php",
      img: "/img/php.png",
      active: true,
      title: "php",
    },
    {
      id: "Swift",
      img: "/img/swift.png",
      active: true,
      title: "Swift",
    },
    {
      id: "Kotlin",
      img: "/img/kotlin.png",
      active: true,
      title: "Kotlin",
    },
    {
      id: "TypeScript",
      img: "/img/typescript.png",
      active: true,
      title: "TypeScript",
    },
  ]);

  //모든 스택의 active가 false일 때, 모두 True로 바꿔줘야 한다.
  React.useLayoutEffect(() => {
    let stackActiveCountFalseFlag = 0;

    // 모든 스택의 active가 true일 경우 stackActiveCountFalseFlag +1 해준다
    stackArr.map((stack) => {
      if (stack.active === false) {
        stackActiveCountFalseFlag = stackActiveCountFalseFlag + 1;
      }
    });

    // 모든 스택의 active가 false가 될 때, 모든 active를 true로 변경
    if (stackActiveCountFalseFlag === stackArr.length) {
      setStackArr((state) => {
        return state.map((stateItem) => {
          return { ...stateItem, active: !stateItem.active };
        });
      });
    }
  }, [stackArr]);

  const Filter = (item) => {
    let stackActiveCountTrueFlag = 0;

    // 모든 스택의 active가 true일 경우 stackActiveCountTrueFlag를 +1 해준다
    stackArr.map((stack) => {
      if (stack.active === true) {
        stackActiveCountTrueFlag = stackActiveCountTrueFlag + 1;
      }
    });

    //처음에 모든 스택 active 값이 true일 때, 하나 누르면 그 스택을 제외한 나머지를 false로 변경
    if (stackActiveCountTrueFlag === stackArr.length) {
      setStackArr((state) => {
        return state.map((stateItem) => {
          if (stateItem.id !== item.id) {
            return { ...stateItem, active: !stateItem.active };
          }
          return stateItem;
        });
      });
    }

    //내가 선택한 스택의 id의 active를 반전시킴
    if (stackActiveCountTrueFlag !== stackArr.length) {
      setStackArr((state) => {
        return state.map((stateItem) => {
          if (stateItem.id === item.id) {
            return { ...stateItem, active: !stateItem.active };
          }
          return stateItem;
        });
      });
    }

    //리덕스에 있냐 없냐로 넣어주거나 뺌
    const stackIsInRedux = stack2.find((r) => r === item.id);
    if (stackIsInRedux) {
      dispatch(stackAction.setStack2(item.id));
    } else {
      dispatch(stackAction.getStack2(item.id));
    }
  };

  return (
    <Grid
      display="flex"
      width="100%"
      height="75%"
      margin="25px auto 20px auto"
      boxShadow="0px 0px 10px #ddd"
      padding="5px 10px"
      borderRadius="20px"
      overflow="auto"
      alignItems="center"
      maxWidth="1400px"
    >
      {stackArr.map((item) => {
        return (
          <LogoButton
            item={item}
            key={item.id}
            onClick={() => {
              if (props.do === "StacksComponent") {
                Filter(item);
                // arrStack(item);
              }
            }}
          ></LogoButton>
        );
      })}
    </Grid>
  );
};

export default Stack;
