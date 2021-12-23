import { useEffect } from "react";
import styled from "styled-components";
import { useScript } from "../../shared/Hooks";
import { Grid } from "../../elements/Index";

const SocialButtonGroup = () => {
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init("d2f8bffda79329fc9278a8bed23d88da");
      }
    }
  }, [status]);
  // const handleKakaoButton = () => {
  //   window.Kakao.Link.sendScrap({
  //     requestUrl: currentUrl,
  //   });
  // };
  return (
    <Grid display="flex" width="200px" margin="auto" bg="#eee">
      <SocialButton>카카오공유</SocialButton>
      <SocialButton>트위터공유</SocialButton>
      <SocialButton>페이스북공유</SocialButton>
      <SocialButton>Url공유</SocialButton>
    </Grid>
  );
};

const SocialButton = styled.div`
  width: 40px;
  height: 40px;
  margin: 5px;
  background-color: #111;
  color: #fff;
`;

export default SocialButtonGroup;
