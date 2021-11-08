/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { history } from "../redux/configureStore";
import { Grid, Image, Progress } from "../elements/Index";
import Img from "../images/flutter.png";

const PostStacks = (props) => {
  console.log(post_list);
  let stack = props.stack;
  console.log(stack);

  return (
    <div>
      <Grid
        display="flex"
        width="45px"
        borderRadius="50%"
        backgroundColor="white"
        margin="-26px 13px"
      >
        {stack === "React" && <Image src="img/react.png" />}
        {stack === "Java" && <Image src="img/java.png" />}
        {stack === "JavaScript" && <Image src="img/javascript.png" />}
        {stack === "Python" && <Image src="img/python.png" />}
        {stack === "Node" && <Image src="img/node.js.png" />}
        {stack === "cpp" && <Image src="img/c__.png" />}
        {stack === "Flask" && <Image src="img/flask.png" />}
        {stack === "Django" && <Image src="img/django.png" />}
        {stack === "Vue" && <Image src="img/vue.png" />}
        {stack === "Spring" && <Image src="img/spring.png" />}
        {stack === "php" && <Image src="img/php.png" />}
        {stack === "Swift" && <Image src="img/swift.png" />}
        {stack === "Kotlin" && <Image src="img/kotlin.png" />}
        {stack === "TypeScript" && <Image src="img/typescript.png" />}
      </Grid>
    </div>
  );
};

export default PostStacks;
