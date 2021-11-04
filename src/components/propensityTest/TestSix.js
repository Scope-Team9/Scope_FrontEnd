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
            Q6.당신이 생각할 때 더 좋은 성과를 만들 수 있을 것 같은 팀은?
            <Button
              isTest
              isValue="V"
              _onClick={e => {
                handleUserCreate(e.target.value);
              }}
            >
              V. 직책에 따라 책임이 분배되는 팀
            </Button>
            <Button
              isTest
              isValue="H"
              _onClick={e => {
                handleUserCreate(e.target.value);
              }}
            >
              H. 책임이 균등하게 나누어진 팀
            </Button>
          </div>
        </Grid>
        <Grid>
          <div>Q6.당신의 팀원이 더 좋은 성과를 만들 수 있을 것 같은 팀은?</div>
          <Button
            isTest
            isValue="V"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            직책에 따라 책임이 분배되는 팀
          </Button>
          <Button
            isTest
            isValue="H"
            _onClick={e => {
              handleMemberCreate(e.target.value);
            }}
          >
            책임이 균등하게 나누어진 팀
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestSix;
