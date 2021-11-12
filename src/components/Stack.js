/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { Grid } from "../elements/Index";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../redux/modules/post";
import { stackAction } from "../redux/modules/stack";

const Stack = () => {
  const dispatch = useDispatch();
  const is_clicked = useSelector((state) => state.stack.stack);
  //필터 클릭
  const [currentClick, setCurrentClick] = React.useState(null);
  const [prevClick, setPrevClick] = React.useState(null);
  const [click, setClick] = React.useState(null);
  const [flag, setFlag] = React.useState([]);
  // console.log(Object.keys(stackList));

  // 리덕스에서 filter가 잘 되지만, 다시 불러오면 그대로임 ㅡㅡ
  const onclick = (stack) => {
    // const testResult = Object.keys(stackList).find((item) => item === stack);
    // console.log("희망", testResult);

    //Object.key 또는 Object.values 로 배열의 키와 밸류 값들을 찾을 수 있다.
    const result = Object.values(is_clicked).find((item) => item === stack);
    // console.log("이 값이 있으면 지워줘야함", result);
    if (result) {
      dispatch(postActions.isMainPage(true));
      dispatch(stackAction.setStack(stack));
    } else {
      dispatch(postActions.isMainPage(true));
      dispatch(stackAction.getStack(stack));
    }

    // dispatch(stackAction.getStack(stack));
  };

  // const test = () => {
  //   console.log(is_clicked);
  // };
  const GetClick = (e) => {
    setCurrentClick(e);
    console.log(e);
  };

  React.useEffect(
    (e) => {
      const clickAgain = flag.find((e) => e === currentClick);
      const toRemove = flag.filter((e) => e !== currentClick);

      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        current.style.opacity = "1";
      }
      if (prevClick !== null && clickAgain === currentClick) {
        let prev = document.getElementById(currentClick);
        prev.style.opacity = "0.5";
      }
      setPrevClick(currentClick);

      if (!clickAgain && currentClick !== null) {
        setFlag((preList) => [...preList, currentClick]);
      } else if (clickAgain) {
        setFlag(toRemove);
      }
    },

    [currentClick, click]
  );

  // let current = document.getElementById("React");
  // current.style.opacity = "0.4";
  return (
    <Grid
      display="flex"
      width="73%"
      // justifyContent="space-evenly"
      margin="25px auto 20px auto"
      boxShadow="0px 0px 10px #ddd"
      padding="5px 10px"
      borderRadius="20px"
      overflow="auto"
    >
      <BorderRadius>
        <IMGS
          class="stack"
          id="React"
          src="img/react.png"
          onClick={(e) => {
            onclick("React");
            GetClick(e.target.id);
            setClick(click + 1);
          }}
        ></IMGS>
      </BorderRadius>
      <BorderRadius>
        <IMGS
          class="stack"
          id="Java"
          src="img/java.png"
          onClick={(e) => {
            onclick("Java");
            GetClick(e.target.id);
            setClick(click + 1);
          }}
        ></IMGS>
      </BorderRadius>
      <BorderRadius>
        <IMGS
          class="stack"
          id="JavaScript"
          src="img/javascript.png"
          onClick={(e) => {
            onclick("JavaScript");
            GetClick(e.target.id);
            setClick(click + 1);
          }}
        ></IMGS>
      </BorderRadius>
      <BorderRadius>
        <IMGS
          class="stack"
          id="Python"
          src="img/python.png"
          onClick={(e) => {
            // test();
            onclick("Python");
            GetClick(e.target.id);
            setClick(click + 1);
          }}
        ></IMGS>
      </BorderRadius>
      <BorderRadius>
        <IMGS
          class="stack"
          id="Node"
          src="img/node.js.png"
          onClick={(e) => {
            onclick("Node");
            GetClick(e.target.id);
            setClick(click + 1);
          }}
        ></IMGS>
      </BorderRadius>
      <BorderRadius>
        <IMGS
          class="stack"
          id="cpp"
          src="img/c__.png"
          onClick={(e) => {
            onclick("cpp");
            GetClick(e.target.id);
            setClick(click + 1);
          }}
        ></IMGS>
      </BorderRadius>
      <BorderRadius>
        <IMGS
          class="stack"
          id="Flask"
          src="img/flask.png"
          onClick={(e) => {
            onclick("Flask");
            GetClick(e.target.id);
            setClick(click + 1);
          }}
        ></IMGS>
      </BorderRadius>
      <BorderRadius>
        <IMGS
          class="stack"
          id="Django"
          src="img/django.png"
          onClick={(e) => {
            onclick("Django");
            GetClick(e.target.id);
            setClick(click + 1);
          }}
        ></IMGS>
      </BorderRadius>
      <BorderRadius>
        <IMGS
          class="stack"
          id="Vue"
          src="img/vue.png"
          onClick={(e) => {
            onclick("Vue");
            GetClick(e.target.id);
            setClick(click + 1);
          }}
        ></IMGS>
      </BorderRadius>
      <BorderRadius>
        <IMGS
          class="stack"
          id="Spring"
          src="img/spring.png"
          onClick={(e) => {
            onclick("Spring");
            GetClick(e.target.id);
            setClick(click + 1);
          }}
        ></IMGS>
      </BorderRadius>
      <BorderRadius>
        <IMGS
          class="stack"
          id="php"
          src="img/php.png"
          onClick={(e) => {
            onclick("php");
            GetClick(e.target.id);
            setClick(click + 1);
          }}
        ></IMGS>
      </BorderRadius>
      <BorderRadius>
        <IMGS
          class="stack"
          id="Swift"
          src="img/swift.png"
          onClick={(e) => {
            onclick("Swift");
            GetClick(e.target.id);
            setClick(click + 1);
          }}
        ></IMGS>
      </BorderRadius>
      <BorderRadius>
        <IMGS
          class="stack"
          id="Kotlin"
          src="img/kotlin.png"
          onClick={(e) => {
            onclick("Kotlin");
            GetClick(e.target.id);
            setClick(click + 1);
          }}
        ></IMGS>
      </BorderRadius>
      <BorderRadius>
        <IMGS
          class="stack"
          id="TypeScript"
          src="img/typescript.png"
          onClick={(e) => {
            onclick("TypeScript");
            GetClick(e.target.id);
            setClick(click + 1);
          }}
        ></IMGS>
      </BorderRadius>
    </Grid>
  );
};

const IMGS = styled.img`
  cursor: pointer;
  width: 68px;
  margin: 10px 15px;
  opacity: 0.4;
  @media screen and (max-width: 750px) {
    width: 30px;
  }
`;

const BorderRadius = styled.div`
  border-radius: 250px;
`;
const StackWrap = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  margin: auto auto 20px auto;
  box-shadow: 0px 0px 10px #ddd;
  padding: 5px 50px;
  border-radius: 20px;
  overflow: auto;
`;

export default Stack;
