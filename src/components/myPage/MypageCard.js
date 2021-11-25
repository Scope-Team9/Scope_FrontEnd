/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { Grid, Image, Text, Button } from "../../elements/Index";
import CardImgs from "./card/CardImgs";
import Select from "react-select";
import DeleteUserModal from "../../modal/DeleteUserModal";
import Swal from "sweetalert2";
import { apis } from "../../lib/axios";
import CardUserInfo from "./card/CardUserInfo";

const MypageCard = props => {
  const [editMyProfile, setEditMyProfile] = React.useState(false); //
  const [checkEmail, setCheckEmail] = React.useState();
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [techStack, setTeckstack] = React.useState([]);
  const [nickName, setNickName] = React.useState(props.nickName);
  const [email, setEmail] = React.useState(props.email);

  const styles = {
    control: (base, state) => ({
      ...base,
      boxShadow: state.isFocused ? 0 : 0,
      borderWidth: 2,
      minHeight: 40,
      borderColor: state.isFocused ? "#C4C4C4" : base.borderColor,
      "&:hover": {
        borderColor: state.isFocused ? "#C4C4C4" : base.borderColor,
      },
    }),
  };

  function fn_submit(data) {
    let userData = {
      nickname: nickName,
      email: email,
      userTechStack: techStack,
    };

    const fetchData = async () => {
      try {
        console.log(userData);
        const result = await apis.editUserInfo(props.userId, userData);
        // console.log(result);
        setEditMyProfile(false);
        props.onClick2();
        Swal.fire("수정 완료!", "", "success");
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchData();
  }

  const setEditProfile = () => {
    if (techStack.length > 4) {
      Swal.fire("기술은 4개 까지 선택 가능합니다.", "", "warning");
      return;
    }
    fn_submit(email);
  };
  const deleteUser = () => {
    setDeleteModal(true);
  };

  //테크스택 옵션
  const techStackOption = [
    { value: "React", label: "React" },
    { value: "Java", label: "Java" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "Spring", label: "Spring" },
    { value: "Node", label: "Node" },
    { value: "cpp", label: "C++" },
    { value: "Flask", label: "Flask" },
    { value: "Django", label: "Django" },
    { value: "Vue", label: "Vue" },
    { value: "php", label: "php" },
    { value: "Swift", label: "Swift" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "TypeScript", label: "TypeScript" },
  ];

  return (
    <Cards>
      <CardImgs myType={props.myType} />

      {props.editMyProfile === false && (
        <>
          <CardUserInfo
            editMyProfile={props.editMyProfile}
            setEditMyProfile={props.setEditMyProfile}
            mydata={props.mydata}
            myType={props.myType}
            myUserId={props.myUserId}
            userId={props.userId}
            nickName={props.nickName}
            email={props.email}
            techStack={props.techStack}
            onClick={props.onClick}
          />
        </>
      )}
      {props.editMyProfile === true && (
        <>
          {/* 닉네임 */}
          <MyInfoText1>
            <div style={{ width: "90px", marginLeft: "30px" }}>
              <p>NickName </p>
            </div>
            <div style={{ width: "150px", alignItems: "center" }}>
              <input
                style={{
                  borderRadius: "5px",
                  borderColor: "#707070",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                  color: "#707070",
                  border: "1px solid #707070",
                  outlineStyle: "none",
                  margin: "13px 0 0 0",
                  width: "150px",
                  padding: "7px",
                }}
                defaultValue={props.nickName}
                onChange={e => {
                  setNickName(e.target.value);
                }}
              ></input>
            </div>
          </MyInfoText1>

          {/* 이메일 */}
          <MyInfoText1>
            <div
              style={{
                width: "90px",
                marginLeft: "30px",
                height: "60px",
              }}
            >
              <p style={{ marginTop: "20px" }}>E-mail </p>
            </div>
            <div style={{ width: "90px" }}>
              <input
                style={{
                  borderRadius: "5px",
                  borderColor: "#707070",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                  color: "#707070",
                  border: "1px solid #707070",
                  outlineStyle: "none",
                  margin: "15px 0 0 0",
                  width: "150px",
                  padding: "7px",
                }}
                defaultValue={props.email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
          </MyInfoText1>
          {/* 기술스택 */}
          <MyInfoText1>
            <div
              style={{
                width: "90px",
                marginLeft: "30px",
                height: "80px",
              }}
            >
              <p style={{}}>TechStack </p>
            </div>
            <Grid width="167px">
              <Select
                isMulti
                name="techStack"
                options={techStackOption}
                styles={styles}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={e => {
                  let techStack = [];
                  let arr = e;
                  let idx = 0;
                  for (idx = 0; idx < e.length; idx++) {
                    techStack.push(arr[idx]["value"]);
                  }
                  setTeckstack(techStack);
                  // console.log(techStack);
                }}
              >
                기술스택
              </Select>
            </Grid>
          </MyInfoText1>
          <Line></Line>
          {/* 진행 프로젝트 */}
          <MyInfoText2>
            <div style={{ width: "150px", marginLeft: "30px" }}></div>
            <div style={{ width: "50px", marginLeft: "100px" }}></div>
          </MyInfoText2>
          {/* 참여 프로젝트 */}
          <MyInfoText2>
            <div style={{ width: "150px", marginLeft: "30px" }}></div>
            <div style={{ width: "50px", marginLeft: "100px" }}></div>
          </MyInfoText2>
          {/* 마감 프로젝트 */}
          <MyInfoText2>
            <div style={{ width: "150px", marginLeft: "30px" }}></div>
            <div style={{ width: "50px", marginLeft: "100px" }}></div>
          </MyInfoText2>

          <div style={{ display: "flex" }}>
            <Button
              margin="15px auto 15px 10%"
              height="40px"
              width="132px"
              text="프로필 저장하기"
              _onClick={setEditProfile}
            ></Button>
            <Button
              margin="15px auto 15px -9%"
              height="40px"
              width="132px"
              text="취소하기"
              _onClick={() => {
                props.onClick2();
              }}
            ></Button>

            <DeleteUserModal
              modal={deleteModal}
              setModal={setDeleteModal}
              userId={props.myUserId}
            />
          </div>
          <Exit onClick={deleteUser}> 회원탈퇴 </Exit>
        </>
      )}
    </Cards>
  );
};

const Cards = styled.div`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  width: 100%;
  height: 900px;
  /* background-color: rgba(255, 255, 255, 0); */
  background-color: white;
  border-radius: 20px;
  overflow: hidden;

  position: absolute;
  right: -35%;
  top: -600%;
  @media screen and (max-width: 1600px) {
    width: 90%;
    position: absolute;
    right: -15%;
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const MyInfoText1 = styled.div`
  font-size: 14px;
  display: flex;
  color: #737373;
`;
const MyInfoText2 = styled.div`
  font-size: 14px;
  display: flex;
  color: #737373;
`;
const Line = styled.hr`
  width: 80%;
  color: black;
`;
const Exit = styled.button`
  margin: 0px auto 15px 30%;
  height: 40px;
  width: 132px;
  background-color: white;
  border: 1px solid #d1d1d1;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: #d1d1d1;
    opacity: 0.7;
  }
`;
export default MypageCard;
