import React from "react";
import { Grid, Button } from "../../elements/Index";

const TestSix = props => {
  const { handleUserCreate, handleMemberCreate } = props;
  return (
    <Grid>
      <Grid height="30px" bg="#007BFF">
        리더형/팔로워형 테스트
      </Grid>
      <div>성향테스트 6번</div>
      <Grid display="flex" flexDirection="column">
        <Grid>
          <div>
            당신이 생각할 때 더 좋은 성과를 만들 수 있을 것 같은 팀은?
            <button
              value="V"
              onClick={e => {
                handleUserCreate(e.target.value);
              }}
            >
              V. 직책에 따라 책임이 분배되는 팀
            </button>
            <button
              value="H"
              onClick={e => {
                handleUserCreate(e.target.value);
              }}
            >
              H. 책임이 균등하게 나누어진 팀
            </button>
          </div>
        </Grid>
        <Grid>
          <div>당신의 팀원이 더 좋은 성과를 만들 수 있을 것 같은 팀은?</div>
          <button
            value="V"
            onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            V. 직책에 따라 책임이 분배되는 팀
          </button>
          <button
            value="H"
            onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            H. 책임이 균등하게 나누어진 팀
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestSix;
