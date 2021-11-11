import React from "react";
import { Grid, Image } from "../elements/Index";

const UserList = props => {
  let list = props.list;

  return (
    <React.Fragment>
      <Grid display="flex" width="45px" borderRadius="50%">
        {list === "LVG" && <Image src="img/호랑이.png" />}
        {list === "LVP" && <Image src="img/늑대.png" />}
        {list === "LHG" && <Image src="img/여우.png" />}

        {list === "LHP" && <Image src="img/python.png" />}
        {list === "FVG" && <Image src="img/토끼.png" />}
        {list === "FVP" && <Image src="img/개.png" />}

        {list === "FHG" && <Image src="img/고양이.png" />}
        {list === "FHP" && <Image src="img/물개.png" />}
      </Grid>
    </React.Fragment>
  );
};

export default UserList;
