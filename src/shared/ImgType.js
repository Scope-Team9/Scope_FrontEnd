import React from "react";
import styled from "styled-components";
import { Grid } from "../elements/Index";
const ImgType = (props) => {
  const { margin, width, height } = props;
  const styles = {
    margin,
    width,
    height,
  };
  const [imges, setImges] = React.useState([
    {
      id: "LVG",
      img: "/img/호랑이.png",
    },
    {
      id: "LVP",
      img: "/img/늑대.png",
    },
    {
      id: "LHG",
      img: "/img/여우.png",
    },
    {
      id: "LHP",
      img: "/img/판다.png",
    },
    {
      id: "FVG",
      img: "/img/토끼.png",
    },
    {
      id: "FVP",
      img: "/img/개.png",
    },
    {
      id: "FHG",
      img: "/img/고양이.png",
    },
    {
      id: "FHP",
      img: "/img/물개.png",
    },
    {
      id: "RHP",
      img: "/img/너구리.png",
    },
  ]);
  const [result, setResult] = React.useState();
  React.useEffect(() => {
    console.table(props);
    imges.map((item) => {
      if (item.id === props.img) {
        setResult(item.img);
      }
    });
  }, []);

  return <>{result && <Img {...styles} src={result} />}</>;
};

ImgType.defaultProps = {
  margin: "6px",
  width: "48px",
  height: "48px",
};

const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
`;
export default ImgType;
