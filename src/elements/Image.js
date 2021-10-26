import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { shape, src, size, _onClick, children } = props;

  const styles = {
    src: src,
    size: size,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles} onClick={_onClick}></ImageCircle>;
  }

  if (shape === "card") {
    return <CardImage {...styles} onClick={_onClick}></CardImage>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles} onClick={_onClick}></AspectInner>
      </AspectOutter>
    );
  }

  if (shape === "main") {
    return <MainInner {...styles} onClick={_onClick}></MainInner>;
  }

  return (
    <React.Fragment>
      <ImageDefault {...styles} onClick={_onClick}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: "circle",
  src: "https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_301/3-4-3.jpg",
  size: 36,
  _onClick: () => {},
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
`;

const AspectOutter = styled.div`
  width: auto;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

const CardImage = styled.div`
  width: 100%;
  height: auto;
`;

const MainImage = styled.div`
  width: 100%;
  height: auto;
`;

const MainInner = styled.div`
  width: 100%;
  margin: auto;
  min-width: 25rem;
  position: relative;
  padding-top: 20%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-position: center;
  /* background-size: cover; */
`;

export default Image;
