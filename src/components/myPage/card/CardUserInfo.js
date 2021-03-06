/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { Grid, Image, Text, Button } from "../../../elements/Index";

const CardUserInfo = (props) => {
  const [techStack, setTeckstack] = React.useState([]);
  const [nickName, setNickName] = React.useState();
  const [email, setEmail] = React.useState();

  return (
    <div>
      {props.nickName && props.email && (
        <>
          <MyInfoText1>
            <div style={{ width: "95px", marginLeft: "25px" }}>
              <p>NickName </p>
            </div>
            <div style={{ width: "100px" }}>
              <p>{props.nickName}</p>
            </div>
          </MyInfoText1>
          {/* Email */}
          <MyInfoText1>
            <div
              style={{
                width: "95px",
                marginLeft: "25px",
              }}
            >
              <p>E-mail </p>
            </div>
            <div style={{ width: "90px" }}>
              <p style={{ fontWeight: "bold" }}>{props.email}</p>
            </div>
          </MyInfoText1>
        </>
      )}

      {/* 기술 스텍 */}
      <MyInfoText1>
        <div
          style={{
            width: "95px",
            marginLeft: "25px",
            height: "150px",
          }}
        >
          <p>TechStack </p>
        </div>
        {props.techStack && (
          <>
            <div style={{ width: "120px" }}>
              {props.techStack?.map((p, idx) => {
                return <p key={idx}>{p}</p>;
              })}
            </div>
          </>
        )}
      </MyInfoText1>
      <Line></Line>
      {/* 진행 프로젝트 */}
      <MyInfoText2>
        <div style={{ width: "300px", marginLeft: "30px" }}>
          <p>모집 프로젝트 </p>
        </div>
        <div style={{ width: "50px", marginLeft: "100px" }}>
          <p>{props.mydata.recruitment.length}</p>
        </div>
      </MyInfoText2>
      {/* 참여 프로젝트 */}
      <MyInfoText2>
        <div style={{ width: "300px", marginLeft: "30px" }}>
          <p>진행 프로젝트 </p>
        </div>
        <div style={{ width: "50px", marginLeft: "100px" }}>
          <p>{props.mydata.inProgress.length}</p>
        </div>
      </MyInfoText2>
      {/* 마감 프로젝트 */}
      <MyInfoText2>
        <div style={{ width: "300px", marginLeft: "30px" }}>
          <p>완료 프로젝트 </p>
        </div>
        <div style={{ width: "50px", marginLeft: "100px" }}>
          <p>{props.mydata.end.length}</p>
        </div>
      </MyInfoText2>
      {props.mydata?.isMyMypage === true && (
        <>
          <Button
            margin="15px auto 15px 30%"
            height="40px"
            width="132px"
            text="프로필 수정하기"
            _onClick={() => {
              props.onClick();
            }}
          ></Button>
        </>
      )}
    </div>
  );
};

const MyInfoText1 = styled.div`
  font-size: 14px;
  display: flex;
  color: #737373;
`;
const MyInfoText2 = styled.div`
  font-size: 14px;
  display: flex;
  color: #737373;
  width: 90%;
`;

const Line = styled.hr`
  width: 80%;
  color: black;
`;
export default CardUserInfo;
