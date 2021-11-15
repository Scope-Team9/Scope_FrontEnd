/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { Grid } from "../elements/Index";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../redux/modules/post";
import { stackAction } from "../redux/modules/stack";
import LogoButton from "../elements/LogoButton";

const Stack = () => {
  const dispatch = useDispatch();
  const is_clicked = useSelector((state) => state.stack.stack);
  //필터 클릭
  const [arr, setArr] = React.useState([
    {
      id: "React",
      img: "/img/react.png",
      active: false,
    },
    {
      id: "Java",
      img: "/img/java.png",
      active: false,
    },
    {
      id: "JavaScript",
      img: "/img/javascript.png",
      active: false,
    },
    {
      id: "Python",
      img: "/img/python.png",
      active: false,
    },
    {
      id: "Node",
      img: "/img/node.js.png",
      active: false,
    },
    {
      id: "cpp",
      img: "/img/c__.png",
      active: false,
    },
    {
      id: "Flask",
      img: "/img/flask.png",
      active: false,
    },
    {
      id: "Django",
      img: "/img/django.png",
      active: false,
    },
    {
      id: "Vue",
      img: "/img/vue.png",
      active: false,
    },
    {
      id: "Spring",
      img: "/img/spring.png",
      active: false,
    },
    {
      id: "php",
      img: "/img/php.png",
      active: false,
    },
    {
      id: "Swift",
      img: "/img/swift.png",
      active: false,
    },
    {
      id: "Kotlin",
      img: "/img/kotlin.png",
      active: false,
    },
    {
      id: "TypeScript",
      img: "/img/typescript.png",
      active: false,
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

    const result = Object.values(is_clicked).find((r) => r === item.id);
    // console.log("이 값이 있으면 지워줘야함", result);
    if (result) {
      dispatch(postActions.isMainPage(true));
      dispatch(stackAction.setStack(item.id));
    } else {
      dispatch(postActions.isMainPage(true));
      dispatch(stackAction.getStack(item.id));
    }
  };

  return (
    <Grid
      display="flex"
      width="73%"
      margin="25px auto 20px auto"
      boxShadow="0px 0px 10px #ddd"
      padding="5px 10px"
      borderRadius="20px"
      overflow="auto"
    >
      {arr.map((item) => {
        return (
          <LogoButton
            item={item}
            key={item.id}
            onClick={() => {
              Filter(item);
            }}
          ></LogoButton>
        );
      })}
    </Grid>
  );
};

export default Stack;
