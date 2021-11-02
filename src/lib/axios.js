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
    console.log(cookie);
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
  kakaologin: (code) => instance.get("/api/login/kakao", code),
  register: (registerInfo) => instance.post("/api/signup", registerInfo),
  checkEmail: (email) => instance.get("/api/login/email?email=email", email),
  signup: (registerInfo) =>
    instance.post(
      "/api/post?filter=recommend&displayNumber=6&page=2&",
      registerInfo
    ),

  // 유저 관련 api
  updateProfileImg: (imageUrl) => instance.put(`/user/image`, imageUrl),
  getUserInfo: () => instance.get("/user/info"),
  getAllUserList: () => instance.get("/user/list"),

  //포스트 관련 api
  // getPost: (page, stack) =>
  //   instance.get(
  //     `/api/post?filter=${};${};${};${};${};${};${};${};${};${};${};${};${};${}&displayNumber=15&page=${page}&sort=createdAt`
  //   ),

  getPost: (stack, paging) =>
    instance.get(
      `/api/post?filter=${stack.React};${stack.Spring};${stack.Swift};${stack.TypeScript};${stack.cpp};${stack.Django};${stack.Flask};${stack.Java};${stack.JavaScript};${stack.Kotlin};${stack.Node};${stack.php};${stack.Python};${stack.Vue};&displayNumber=15&page=${paging}&sort=createdAt&snsId=test`
    ),
  //data.json용
  // getPost: () => instance.get(`/post`),
  addPost: (postInfo) => instance.post(`/api/post`, postInfo),
  updatePost: (postId, postInfo) => instance.put(`/post/${postId}`, postInfo),
  deletePost: (postId) => instance.delete(`/post/${postId}`),
  clickLike: (postId) => instance.post(`/post/${postId}/like`),
  addComment: (commentInfo) => instance.post("/comment", commentInfo),
  deleteComment: (commentId) => instance.delete(`/comment/${commentId}`),
  editComment: (commentId, content) =>
    instance.put(`/comment/${commentId}`, content),
  addMyImage: (base64) => instance.post(`/api/image`, base64),
};
