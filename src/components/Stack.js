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
  const [arr, setArr] = React.useState([
    {
      id: "Java",
      img: "/img/java.png",
      active: false,
      title: "Java",
    },
    {
      id: "JavaScript",
      img: "/img/javascript.png",
      active: false,
      title: "JavaScript",
    },
    {
      id: "Python",
      img: "/img/python.png",
      active: false,
      title: "Python",
    },
    {
      id: "Node",
      img: "/img/node.js.png",
      active: false,
      title: "Node.js",
    },
    {
      id: "React",
      img: "/img/react.png",
      active: false,
      title: "React",
    },
    {
      id: "C++",
      img: "/img/c__.png",
      active: false,
      title: "C++",
    },
    {
      id: "Flask",
      img: "/img/flask.png",
      active: false,
      title: "Flask",
    },
    {
      id: "Django",
      img: "/img/django.png",
      active: false,
      title: "Django",
    },
    {
      id: "Vue",
      img: "/img/vue.png",
      active: false,
      title: "Vue",
    },
    {
      id: "Spring",
      img: "/img/spring.png",
      active: false,
      title: "Spring",
    },
    {
      id: "php",
      img: "/img/php.png",
      active: false,
      title: "php",
    },
    {
      id: "Swift",
      img: "/img/swift.png",
      active: false,
      title: "Swift",
    },
    {
      id: "Kotlin",
      img: "/img/kotlin.png",
      active: false,
      title: "Kotlin",
    },
    {
      id: "TypeScript",
      img: "/img/typescript.png",
      active: false,
      title: "TypeScript",
    },
  ]);

  const Filter = (item) => {
    setArr((state) => {
      return state.map((stateItem) => {
        if (stateItem.id === item.id) {
          return { ...stateItem, active: !stateItem.active };
        }
        return stateItem;
      });
    });

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
      {arr.map((item) => {
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
