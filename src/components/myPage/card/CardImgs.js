/* eslint-disable */
import React from "react";
import ImgType from "../../../shared/ImgType";

const CardImgs = (props) => {
  return (
    <div>
      <ImgType
        type={props.myType}
        width="100%"
        height="100%"
        object_fit="cover"
        position="relative"
      />
    </div>
  );
};
export default CardImgs;
