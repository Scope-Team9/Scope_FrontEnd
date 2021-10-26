const CLIENT_ID = "2f892c61e0552c3f50223077e2fc5c6c";
const REDIRECT_URI = "http://localhost:3000/user/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
