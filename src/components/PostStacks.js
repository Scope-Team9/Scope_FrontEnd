/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { history } from "../redux/configureStore";
import { Grid, Image, Progress } from "../elements/Index";
import Img from "../images/flutter.png";

const PostStacks = (props) => {
  const whatPage = useSelector((state) => state.post.whatPage);
  const [stacks, setStacks] = React.useState(9);
  // let stack = props.stack;
  // console.log(stack);
  // console.log("-----");

  React.useEffect(() => {
    let stack = props.stack;
    setStacks(stack);
  }, [whatPage]);
  return (
    <div>
      {stacks && (
        <Grid
          display="flex"
          width="45px"
          borderRadius="50%"
          backgroundColor="white"
          margin="-26px 13px"
        >
          {stacks === "React" && <Image src="img/react.png" />}
          {stacks === "Java" && <Image src="img/java.png" />}
          {stacks === "JavaScript" && <Image src="img/javascript.png" />}
          {stacks === "Python" && <Image src="img/python.png" />}
          {stacks === "Node" && <Image src="img/node.js.png" />}
          {stacks === "cpp" && <Image src="img/c__.png" />}
          {stacks === "Flask" && <Image src="img/flask.png" />}
          {stacks === "Django" && <Image src="img/django.png" />}
          {stacks === "Vue" && <Image src="img/vue.png" />}
          {stacks === "Spring" && <Image src="img/spring.png" />}
          {stacks === "php" && <Image src="img/php.png" />}
          {stacks === "Swift" && <Image src="img/swift.png" />}
          {stacks === "Kotlin" && <Image src="img/kotlin.png" />}
          {stacks === "TypeScript" && <Image src="img/typescript.png" />}
        </Grid>
      )}
    </div>
  );
};

export default PostStacks;
