/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../redux/modules/post";
import { stackAction } from "../redux/modules/stack";

const Stack = () => {
  const dispatch = useDispatch();
  const is_clicked = useSelector((state) => state.stack.stack);

  // console.log(Object.keys(stackList));

  // 리덕스에서 filter가 잘 되지만, 다시 불러오면 그대로임 ㅡㅡ
  const onclick = (stack) => {
    // const testResult = Object.keys(stackList).find((item) => item === stack);
    // console.log("희망", testResult);

    //Object.key 또는 Object.values 로 배열의 키와 밸류 값들을 찾을 수 있다.
    const result = Object.values(is_clicked).find((item) => item === stack);
    // console.log("이 값이 있으면 지워줘야함", result);
    if (result) {
      dispatch(stackAction.setStack(stack));
    } else {
      dispatch(stackAction.getStack(stack));
    }

    // dispatch(stackAction.getStack(stack));
  };

  // const test = () => {
  //   console.log(is_clicked);
  // };

  return (
    <div>
      <IMGS
        src="img/react.png"
        onClick={() => {
          onclick("React");
        }}
      ></IMGS>
      <IMGS
        src="img/java.png"
        onClick={() => {
          onclick("Java");
        }}
      ></IMGS>
      <IMGS
        src="img/javascript.png"
        onClick={() => {
          onclick("JavaScript");
        }}
      ></IMGS>
      <IMGS
        src="img/python.png"
        onClick={() => {
          // test();
          onclick("Python");
        }}
      ></IMGS>
      <IMGS
        src="img/node.js.png"
        onClick={() => {
          onclick("Node");
        }}
      ></IMGS>
      <IMGS
        src="img/c__.png"
        onClick={() => {
          onclick("cpp");
        }}
      ></IMGS>
      <IMGS
        src="img/react.png"
        onClick={() => {
          onclick("Flask");
        }}
      ></IMGS>
      <IMGS
        src="img/django.png"
        onClick={() => {
          onclick("Django");
        }}
      ></IMGS>
      <IMGS
        src="img/vue.png"
        onClick={() => {
          onclick("Vue");
        }}
      ></IMGS>
      <IMGS
        src="img/spring.png"
        onClick={() => {
          onclick("Spring");
        }}
      ></IMGS>
      <IMGS
        src="img/react.png"
        onClick={() => {
          onclick("php");
        }}
      ></IMGS>
      <IMGS
        src="img/swift.png"
        onClick={() => {
          onclick("Swift");
        }}
      ></IMGS>
      <IMGS
        src="img/kotlin.png"
        onClick={() => {
          onclick("Kotlin");
        }}
      ></IMGS>
      <IMGS
        src="img/typescript.png"
        onClick={() => {
          onclick("TypeScript");
        }}
      ></IMGS>
    </div>
  );
};

const IMGS = styled.img`
  cursor: pointer;
  width: 80px;
  margin: 5px;
`;

export default Stack;
