import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
import styled from "styled-components";
import TestOne from "./TestOne";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button, Image } from "../../elements/Index";
import { userCreators } from "../../redux/modules/user";

const PropensityTest = props => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user);

  const { showModal, setShowModal } = props;

  //1.스텝별로 스테이트 변화값에 따라 텍스트가 바뀌는지 먼저 확인
  const [page, setpage] = useState(1);
  const [userPropensityType, setUserPropensityType] = useState([]);
  const [memberPropensityType, setMemberPropensityType] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  console.log(userPropensityType);
  console.log(memberPropensityType);

  //3.스테이트값에 변화를 버튼에 달아줌
  const nextStep = () => {
    if (page === 10) return;
    setpage(page => page + 1);
  };

  const preStep = () => {
    setpage(page => page - 1);
  };

  const handleUserCreate = answer => {
    setUserPropensityType(userPropensityType.concat(answer));
  };

  //체크박스 선택
  // const handleCheck = (type, newData) => {};

  // const checkedAnswerHandler = (answer, isChecked) => {
  //   if (isChecked) {
  //     userPropensityType.add(answer);
  //   }
  // };

  //회원가입
  const register = () => {
    const registerInfo = {
      snsId: userInfo.snsId,
      email: userInfo.email,
      nickname: userInfo.nickName,
      techStack: userInfo.techStack,
      userPropensityType: userPropensityType,
      memberPropensityType: memberPropensityType,
    };
    console.log(registerInfo);
    dispatch(userCreators.signupMiddleware(registerInfo));
  };

  return (
    <Grid>
      {/* 프로그래스바 */}
      <div>
        <progress max="9" value={page} />
      </div>

      {/* 컨텐츠자리 */}
      <Grid>
        {page === 1 && (
          <TestOne
            userPropensityType={userPropensityType}
            handleUserCreate={handleUserCreate}
          />
        )}
        {page === 2 && (
          <TestTwo
            setUserPropensityType={setUserPropensityType}
            setMemberPropensityType={setMemberPropensityType}
          />
        )}
        {page === 3 && (
          <TestThree
            setUserPropensityType={setUserPropensityType}
            setMemberPropensityType={setMemberPropensityType}
          />
        )}
        {page === 4 && (
          <TestFour
            setUserPropensityType={setUserPropensityType}
            setMemberPropensityType={setMemberPropensityType}
          />
        )}
        {page === 5 && (
          <TestFive
            setUserPropensityType={setUserPropensityType}
            setMemberPropensityType={setMemberPropensityType}
          />
        )}
        {page === 6 && (
          <TestSix
            setUserPropensityType={setUserPropensityType}
            setMemberPropensityType={setMemberPropensityType}
          />
        )}
        {page === 7 && (
          <TestSeven
            setUserPropensityType={setUserPropensityType}
            setMemberPropensityType={setMemberPropensityType}
          />
        )}
        {page === 8 && (
          <TestEight
            setUserPropensityType={setUserPropensityType}
            setMemberPropensityType={setMemberPropensityType}
          />
        )}
        {page === 9 && (
          <TestNine
            setUserPropensityType={setUserPropensityType}
            setMemberPropensityType={setMemberPropensityType}
          />
        )}
        {page === 10 && <TestResult />}
      </Grid>

      <Grid display="flex" width="100%">
        {/* 5.다음결과값이 없을때 페이지처리 */}
        {page !== 1 && (
          <Button
            backgroundColor="#007BFF"
            borderRadius="30px"
            width="47%"
            margin="5px"
            _onClick={preStep}
          >
            이전버튼
          </Button>
        )}
        {page !== 9 && (
          <Button
            backgroundColor="#007BFF"
            borderRadius="30px"
            width="47%"
            margin="5px"
            _onClick={nextStep}
          >
            다음버튼
          </Button>
        )}
        {page == 9 && (
          <Button
            backgroundColor="#007BFF"
            borderRadius="30px"
            width="47%"
            margin="5px"
            _onClick={register}
          >
            제출하기
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

//2.스테이트별로 변화를 넣어줄 컴포넌트들 만들기

const TestTwo = () => {
  return (
    <div>
      <div>성향테스트 2번</div>
      <Grid diplay="flex">
        <Grid>
          <div>
            Q1. 새로운 스터디 사람들과의 첫만남! 스터디의 운영을 맡길 스터디
            장을 뽑아야 하는데 이때 당신의 행동은?
          </div>
          <button>
            L - 스터디를 어떻게 운영할지 잠깐 생각해보고 스터디장을 맡아서
            진행한다.
          </button>
          <button>F - 누가 스터디를 잘 이끌 사람인지 살핀다.</button>
        </Grid>
        <Grid>
          <div>
            Q1. 새로운 스터디 사람들과의 첫만남! 스터디의 운영을 맡길 스터디
            장을 뽑아야 하는데 이때 당신의 행동은?
          </div>
          <button>
            L - 스터디를 어떻게 운영할지 잠깐 생각해보고 스터디장을 맡아서
            진행한다.
          </button>
          <button>F - 누가 스터디를 잘 이끌 사람인지 살핀다.</button>
        </Grid>
      </Grid>
    </div>
  );
};
const TestThree = () => {
  return (
    <div>
      <div>성향테스트 3번</div>
      <Grid diplay="flex">
        <Grid>
          <div>
            Q. 나는 큰 보상과 무거운 책임보다는 평범한 보상과 책임이 더 좋다.
          </div>
          <button>L - X</button>
          <button>F - O</button>
        </Grid>
        <Grid>
          <div>
            Q. 나는 큰 보상과 무거운 책임보다는 평범한 보상과 책임이 더 좋다.
          </div>
          <button>L - X</button>
          <button>F - O</button>
        </Grid>
      </Grid>
    </div>
  );
};
const TestFour = () => {
  return (
    <div>
      <Grid bg="#007BFF">수직적/수평적 조직형 테스트</Grid>
      <div>성향테스트 4번</div>
      <Grid diplay="flex">
        <Grid>
          <div>프로젝트를 진행함에 있어서 당신의 생각에 더 가까운 문장은?</div>
          <button>
            V. 팀장의 존재는 프로젝트를 진행함에 있어 필수적이다.{" "}
          </button>
          <button>
            H. 소통이 원활하게만 잘 된다면 팀장이 없어도 문제없이 프로젝트를
            진행할 수 있다.{" "}
          </button>
        </Grid>
        <Grid>
          <div>프로젝트를 진행함에 있어서 당신의 생각에 더 가까운 문장은?</div>
          <button>
            V. 팀장의 존재는 프로젝트를 진행함에 있어 필수적이다.{" "}
          </button>
          <button>
            H. 소통이 원활하게만 잘 된다면 팀장이 없어도 문제없이 프로젝트를
            진행할 수 있다.{" "}
          </button>
        </Grid>
      </Grid>
    </div>
  );
};
const TestFive = () => {
  return (
    <div>
      <div>성향테스트 5번</div>
      <Grid diplay="flex">
        <Grid>
          <div>
            H. 소통이 원활하게만 잘 된다면 팀장이 없어도 문제없이 프로젝트를
            진행할 수 있다.
          </div>
          <button>
            H. 소통이 원활하게만 잘 된다면 팀장이 없어도 문제없이 프로젝트를
            진행할 수 있다.{" "}
          </button>
          <button>H. 모두 동등한 권한을 가지고 진행되는 회의</button>
        </Grid>
        <Grid>
          <div>당신의 팀원이 원했으면 하는 이상적인 회의의 모습은?</div>
          <button>
            H. 소통이 원활하게만 잘 된다면 팀장이 없어도 문제없이 프로젝트를
            진행할 수 있다.{" "}
          </button>
          <button>H. 모두 동등한 권한을 가지고 진행되는 회의</button>
        </Grid>
      </Grid>
    </div>
  );
};
const TestSix = () => {
  return (
    <div>
      <div>성향테스트 6번</div>
      <Grid diplay="flex">
        <Grid>
          <div>당신이 생각할 때 더 좋은 성과를 만들 수 있을 것 같은 팀은?</div>
          <button>V. 직책에 따라 책임이 분배되는 팀 </button>
          <button>H. 책임이 균등하게 나누어진 팀</button>
        </Grid>
        <Grid>
          <div>당신의 팀원이 더 좋은 성과를 만들 수 있을 것 같은 팀은?</div>
          <button>V. 직책에 따라 책임이 분배되는 팀 </button>
          <button>H. 책임이 균등하게 나누어진 팀</button>
        </Grid>
      </Grid>
    </div>
  );
};
const TestSeven = () => {
  return (
    <div>
      <Grid bg="#007BFF">결과/과정 중심형 테스트</Grid>
      <div>성향테스트 7번</div>
      <Grid diplay="flex">
        <Grid>
          <div>Q. 어떤 문장이 당신과 더 어울리나요</div>
          <button>
            G - 결과를 위해서라면 과정에서 얻을 수 있는 심리적 만족감은 조금
            내려놓을 수도 있어야 한다.{" "}
          </button>
          <button>
            P - 문제를 해결하는 과정에서 얻는 성취감이 있다면 보상이 상대적으로
            적더라도 만족한다.
          </button>
        </Grid>
        <Grid>
          <div>Q. 어떤 문장이 당신이 선호하는 팀원의 모습과 더 어울리나요</div>
          <button>
            G - 결과를 위해서라면 과정에서 얻을 수 있는 심리적 만족감은 조금
            내려놓을 수도 있어야 한다.{" "}
          </button>
          <button>
            P - 문제를 해결하는 과정에서 얻는 성취감이 있다면 보상이 상대적으로
            적더라도 만족한다.
          </button>
        </Grid>
      </Grid>
    </div>
  );
};
const TestEight = () => {
  return (
    <div>
      <div>성향테스트 8번</div>
      <Grid diplay="flex">
        <Grid>
          <div>
            Q. 프로젝트에서 문제가 생겼을 때 당신이 생각하는 더 나은 방법은?
          </div>
          <button>
            G. 문제를 해결할 수 있는 방안을 찾고 그 방안이 이끌어 낼 결과에 대해
            생각한다.
          </button>
          <button>
            P. 문제가 발생한 원인을 찾고 문제 해결 과정에서 얻은 지식과 노하우에
            대해 생각한다.
          </button>
        </Grid>
        <Grid>
          <div>
            Q. 프로젝트에서 문제가 생겼을 때 당신의 팀원이 생각했으면 하는
            방법은?
          </div>
          <button>
            G. 문제를 해결할 수 있는 방안을 찾고 그 방안이 이끌어 낼 결과에 대해
            생각한다.
          </button>
          <button>
            P. 문제가 발생한 원인을 찾고 문제 해결 과정에서 얻은 지식과 노하우에
            대해 생각한다.
          </button>
        </Grid>
      </Grid>
    </div>
  );
};
const TestNine = () => {
  return (
    <div>
      <div>성향테스트 9번</div>
      <Grid diplay="flex">
        <Grid>
          <div>
            Q. 지금까지 진행했던 프로잭트를 떠올렸을 때 가장 먼저 생각나는
            부분은?
          </div>
          <button>G. 프로젝트가 이끌어낸 결과와 그에 따른 성취감</button>
          <button>P. 프로젝트 과정에서 얻은 지식과 그에 따른 성취감</button>
        </Grid>
        <Grid>
          <div>
            Q. 당신의 팀원이 프로잭트를 떠올렸을 때 가장 먼저 생각났으면 하는
            부분은?
          </div>
          <button>G. 프로젝트가 이끌어낸 결과와 그에 따른 성취감</button>
          <button>P. 프로젝트 과정에서 얻은 지식과 그에 따른 성취감</button>
        </Grid>
      </Grid>
    </div>
  );
};
const TestResult = () => {
  return (
    <div>
      <div>테스트결과입니다.</div>
      <Image />
      <div> FVP - 팔로잉 / 수직 / 과정 - 허숙희</div>
      <div> </div>
    </div>
  );
};

const ModalWrap = styled.div`
  overflow: hidden;
  width: 500px;
`;

export default PropensityTest;
