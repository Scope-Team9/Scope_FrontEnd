/* eslint-disable */
import React from "react";
import styled from "styled-components";
const Banners = (props) => {
  const [myData, setMyData] = React.useState();
  const [arr, setArr] = React.useState([
    {
      id: "LVG",
      name: "호랑이",
      img: "/img/호랑이배너.jpg",
      color: "#eed691",
    },
    {
      id: "LVP",
      name: "늑대",
      img: "/img/늑대배너.jpg",
      color: "#afa9a0",
    },
    {
      id: "LHG",
      name: "여우",
      img: "/img/여우배너.jpg",
      color: "#e4812a",
    },
    {
      id: "LHP",
      name: "팬더",
      img: "/img/팬더배너.jpg",
      color: "#e4812a",
    },
    {
      id: "FVG",
      name: "토끼",
      img: "/img/토끼배너.jpg",
      color: "#998fc9",
    },
    {
      id: "FVP",
      name: "강아지",
      img: "/img/강아지배너.jpg",
      color: "#e8ddb8",
    },
    {
      id: "FHG",
      name: "고양이",
      img: "/img/고양이배너.jpg",
      color: "#6d6e72",
    },
    {
      id: "FHP",
      name: "물개",
      img: "/img/물개배너.jpg",
      color: "#a9adb3",
    },
    {
      id: "RHP",
      name: "너구리",
      img: "/img/너구리배너.jpg",
      color: "#926D41",
    },
  ]);

  React.useEffect(() => {
    arr.map((item) => {
      if (props.type === item.id) {
        setMyData(item);
      }
    });
  }, []);

  return (
    <React.Fragment>
      {myData && (
        <BannerAnimals color={myData.color}>
          <BannerImg src={myData.img}></BannerImg>
        </BannerAnimals>
      )}
    </React.Fragment>
  );
};

const BannerImg = styled.img`
  object-fit: cover;
`;

const BannerAnimals = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => (props.color ? props.color : "#white")};
  z-index: 0;
`;

export default Banners;
