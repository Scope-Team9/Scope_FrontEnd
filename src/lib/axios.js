import axios from "axios";
import { setCookie } from "../shared/Cookie";
import { history } from "../redux/configureStore";

export const instance = axios.create({
  // baseURL: "http://localhost:3000",
  // baseURL: "http://localhost:4000",
  // baseURL: "http://3.36.94.200",

  baseURL: "http://15.165.159.211",
  headers: {
    "content-type": "application/json; charset=UTF-8",
    accept: "application/json",
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const cookie = document.cookie;
    if (cookie === "") {
      return config;
    }

    // const cookieSplitUndefined = cookie.split('=')[1];
    // console.log(cookieSplitUndefined);
    // const cookieSplit = cookieSplitUndefined.split(';')[0];
    // console.log(cookieSplit);

    const cookieSplit = cookie.split("=")[1];

    config.headers = {
      "content-type": "application/json;charset=UTF-8",
      accept: "application/json",
      Authorization: `Bearer ${cookieSplit}`,
    };
    return config;
  },
  (err) => {
    console.log(err);
  }
);

export const apis = {
  //회원가입 및 로그인 관련 api
  kakaoLogin: (code) => instance.get(`/api/login/kakao?code=${code}`, code),
  githubLogin: (code) => instance.get(`/api/login/github?code=${code}`, code),
  register: (registerInfo) => instance.post("/api/signup", registerInfo),
  checkEmail: (email) => instance.get(`/api/login/email?email=${email}`, email),
  checkNick: (nickName) =>
    instance.get(`/api/login/nickname?nickname=${nickName}`, nickName),
  signup: (registerInfo) => instance.post("/api/signup", registerInfo),

  // 유저 관련 api
  editTest: (userId, testInfo) =>
    instance.post(`/api/test/${userId}`, testInfo),
  applyUser: (postId) => instance.get(`/api/applicant/${postId}`),
  aceeptOffer: (postId, acceptInfo) =>
    instance.post(`/api/team/${postId}`, acceptInfo),
  applyProject: (postId, comment) =>
    instance.post(`/api/applicant/${postId}`, comment),
  cancelProject: (postId) => instance.post(`/api/applicant/${postId}`),

  getUserInfo: () => instance.get("/user/info"),
  getAllUserList: () => instance.get("/user/list"),

  //포스트 관련 api
  getPost: (stack, paging, sort, reBook) =>
    instance.get(
      `/api/post?filter=${stack.React};${stack.Spring};${stack.Swift};${stack.TypeScript};${stack.cpp};${stack.Django};${stack.Flask};${stack.Java};${stack.JavaScript};${stack.Kotlin};${stack.Node};${stack.php};${stack.Python};${stack.Vue};&displayNumber=9&page=${paging}&sort=${sort}&bookmarkRecommend=${reBook}`
    ),
  //마이페이지
  getMypage: (userId) => instance.post(`/api/post${userId}`),

  // 승민
  addPost: (postInfo) => instance.post(`/api/post`, postInfo),
  detailPost: (postId) => instance.get(`/api/post/${postId}`),
  editPost: (postId) => instance.post(`/api/post/${postId}`),
  deletePost: (postId) => instance.delete(`/api/post/${postId}`),

  //data.json용
  // getPost: () => instance.get(`/post`),

  updatePost: (postId, postInfo) => instance.put(`/post/${postId}`, postInfo),

  clickLike: (postId) => instance.post(`/post/${postId}/like`),
  addComment: (commentInfo) => instance.post("/comment", commentInfo),
  deleteComment: (commentId) => instance.delete(`/comment/${commentId}`),
  editComment: (commentId, content) =>
    instance.put(`/comment/${commentId}`, content),
  addMyImage: (base64) => instance.post(`/api/image`, base64),
};
