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
          width="70%"
          height="85%"
          borderRadius="100%"
          backgroundColor="rgba( 255, 255, 255, 1 )"
          margin="-60px 13px"
        >
          {stacks === "React" && <IMGS src="img/react.png" />}
          {stacks === "Java" && <IMGS src="img/java.png" />}
          {stacks === "JavaScript" && <IMGS src="img/javascript.png" />}
          {stacks === "Python" && <IMGS src="img/python.png" />}
          {stacks === "Node" && <IMGS src="img/node.js.png" />}
          {stacks === "cpp" && <IMGS src="img/c__.png" />}
          {stacks === "Flask" && <IMGS src="img/flask.png" />}
          {stacks === "Django" && <IMGS src="img/django.png" />}
          {stacks === "Vue" && <IMGS src="img/vue.png" />}
          {stacks === "Spring" && <IMGS src="img/spring.png" />}
          {stacks === "php" && <IMGS src="img/php.png" />}
          {stacks === "Swift" && <IMGS src="img/swift.png" />}
          {stacks === "Kotlin" && <IMGS src="img/kotlin.png" />}
          {stacks === "TypeScript" && <IMGS src="img/typescript.png" />}
        </Grid>
      )}
    </div>
  );
};

const IMGS = styled.img`
  width: 80%;
  margin: auto;
  padding: 5px;
  align-items: center;
`;

export default PostStacks;
