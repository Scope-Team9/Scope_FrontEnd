import React from "react";
import { Grid, Image } from "../elements/Index";

const UserList = (props) => {
  let list = props.list;

  return (
    <React.Fragment>
      <Grid display="flex" width="45px" borderRadius="50%">
        {list === "LVG" && <Image src="img/react.png" />}
        {list === "LVP" && <Image src="img/java.png" />}
        {list === "LHG" && <Image src="img/javascript.png" />}

        {list === "LHP" && <Image src="img/python.png" />}
        {list === "FVG" && <Image src="img/node.js.png" />}
        {list === "FVP" && <Image src="img/c__.png" />}

        {list === "FHG" && <Image src="img/flask.png" />}
        {list === "FHP" && <Image src="img/django.png" />}
      </Grid>
    </React.Fragment>
  );
};

export default UserList;
