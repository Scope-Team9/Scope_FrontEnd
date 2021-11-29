/* eslint-disable */
import axios from "axios";
import { setCookie } from "../shared/Cookie";
import { history } from "../redux/configureStore";

export const instance = axios.create({
  // baseURL: "http://localhost:3000",
  // baseURL: "http://localhost:8081",
  // baseURL: "http://localhost:4000",
  // baseURL: "http://3.35.219.232",
  baseURL: "https://scopewith.com",
  // baseURL: "http://15.165.159.211",
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
  kakaoLogin: (code) => instance.get(`/api/login/kakao?code=${code}`),
  githubLogin: (code) => instance.get(`/api/login/github?code=${code}`),
  register: (registerInfo) => instance.post("/api/signup", registerInfo),
  checkEmail: (email) => instance.get(`/api/login/email?email=${email}`, email),
  checkNick: (nickName) =>
    instance.get(`/api/login/nickname?nickname=${nickName}`, nickName),
  signup: (registerInfo) => instance.post("/api/signup", registerInfo),

  // 유저 관련 api
  myUser: () => instance.get("/api/myuser"),
  editTest: (userId, testInfo) =>
    instance.post(`/api/test/${userId}`, testInfo),
  applyUser: (postId) => instance.get(`/api/applicant/${postId}`),
  aceeptOffer: (postId, acceptInfo) =>
    instance.post(`/api/team/${postId}`, acceptInfo),
  applyProject: (postId, comment) =>
    instance.post(`/api/applicant/${postId}`, comment),
  cancelProject: (postId) => instance.delete(`/api/applicant/${postId}`),
  exitTeam: (postId) => instance.delete(`/api/team/secession/${postId}`),
  strterLike: (postId, likeUsers) =>
    instance.post(`/api/assessment/${postId}`, likeUsers),
  sumbitUrl: (postId, urls) => instance.post(`/api/post/${postId}/url`, urls),

  getMember: (postId) => instance.get(`/api/team/${postId}`),

  getUserInfo: () => instance.get("/user/info"),
  getAllUserList: () => instance.get("/user/list"),

  getPost: (stack, sort, reBook) =>
    instance.get(
      `/api/post?filter=;;;;;;;;;;;;;;&sort=${sort}&bookmarkRecommend=${reBook}`
    ),
  bookMarkChecked: (postId) => instance.post(`/api/bookmark/${postId}`),

  //마이페이지
  getMypage: (userId) => instance.get(`/api/user/${userId}`),
  writeMyIntroduction: (userId, introduction) =>
    instance.post(`/api/user/${userId}/desc`, introduction),
  projectAssessmentPost: (postId) => instance.get(`/api/assessment/${postId}`),
  editUserInfo: (userId, data) => instance.post(`/api/user/${userId}`, data),
  projectAssessmentPost: (postId) => instance.get(`/api/assessment/${postId}`),
  authEmail: (email) => instance.get(`/api/user/email?email=${email}`),
  deleteUser: (userId) => instance.delete(`/api/user/${userId}`),

  // 상세페이지
  addPost: (postInfo) => instance.post(`/api/post`, postInfo),
  detailPost: (postId) => instance.get(`/api/post/${postId}`),
  editPost: (postId, data) => instance.post(`/api/post/${postId}`, data),
  deletePost: (postId) => instance.delete(`/api/post/${postId}`),
  statusPost: (postId, data) =>
    instance.post(`/api/post/${postId}/status`, data),
  serachTeamUser: (postId) => instance.get(`/api/team/${postId}`),
  exileUser: (postId, userId) =>
    instance.delete(`/api/team/resignation/${postId}?userId=${userId}`),
};
