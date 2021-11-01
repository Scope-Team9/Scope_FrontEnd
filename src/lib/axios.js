import axios from "axios";
import { setCookie } from "../shared/Cookie";
import { history } from "../redux/configureStore";

export const instance = axios.create({
  // baseURL: "http://localhost:3000",
  // baseURL: "http://localhost:4000",
  baseURL: "http://3.36.94.200",
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

// instance.interceptors.response.use(
//   (success) => {
//     console.log(success);
//     const response = success.data;
//     console.log(response.token);

//     if (
//       response.statusCode === 200 &&
//       response.responseMessage === "로그인 성공"
//     ) {
//       let userCookie = success.data.token;
//       console.log(userCookie);
//       setCookie("user_id", userCookie, 30);
//       window.alert("로그인성공");
//       history.push("/main");
//     }

//     if (
//       response.statusCode === 200 &&
//       response.responseMessage === "게시글 조회 성공"
//     ) {
//       return response.posts;
//     }

//     if (
//       response.statusCode === 200 &&
//       response.responseMessage === "회원가입 성공"
//     ) {
//       window.alert("회원가입성공");
//       history.push("/");
//       return response.posts;
//     }

//     return success;
//   },
//   (error) => {
//     console.log(error.response);
//     //비밀번호가 비워있을 떄
//     if (
//       error.response.data.statusCode === 400 &&
//       error.response.data.responseMessage === "비밀번호를 입력해주세요"
//     ) {
//       return window.alert("비밀번호를 입력해주세요");
//     }
//     if (
//       error.response.data.statusCode === 400 &&
//       error.response.data.responseMessage === "회원 정보를 찾을 수 없습니다."
//     ) {
//       return window.alert("회원 정보를 찾을 수 없습니다");
//     }

//     if (
//       error.response.data.statusCode === 400 &&
//       error.response.data.responseMessage === "이름을 입력해주세요"
//     ) {
//       return window.alert("이름을 입력해주세요");
//     }
//     //올바르지 않은 이메일 형식
//     if (
//       error.response.data.statusCode === 400 &&
//       error.response.data.responseMessage === "이메일 형식이 올바르지 않습니다"
//     ) {
//       return window.alert("이메일 형식이 올바르지 않습니다");
//     }

//     if (
//       error.response.data.statusCode === 400 &&
//       error.response.data.responseMessage === "비밀번호는 6~20자리로 해주세요"
//     ) {
//       return window.alert("비밀번호는 6~20자리로 해주세요");
//     }

//     if (
//       error.response.status === 401 &&
//       error.response.data.responseMessage === "로그인이 필요합니다."
//     ) {
//       window.alert("로그인이 필요합니다.");
//       // history.replace('/');
//     }

//     if (
//       error.response.status === 403 &&
//       error.response.responseMessage === "권한이 없습니다."
//     ) {
//       window.alert("권한이 없습니다.");
//     }

//     if (
//       error.response.status === 404 &&
//       error.response.responseMessage === "게시글을 찾을 수 없습니다."
//     ) {
//       window.alert("게시글을 찾을 수 없습니다.");
//     }

//     if (
//       error.response.data.statusCode === 403 &&
//       error.response.data.responseMessage === "권한이 없습니다."
//     ) {
//       return window.alert("권한이 없습니다.");
//     }

//     return error;
//   }
// );

export const apis = {
  //회원가입 및 로그인 관련 api
  kakaologin: (code) => instance.get("/api/login/kakao", code),
  register: (registerInfo) => instance.post("/api/signup", registerInfo),
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

  getPost: (stack) =>
    instance.get(
      `/api/post?filter=${stack.React};${stack.Spring};${stack.Swift};${stack.TypeScript};${stack.cpp};${stack.Django};${stack.Flask};${stack.Java};${stack.JavaScript};${stack.Kotlin};${stack.Node};${stack.php};${stack.Python};${stack.Vue};&displayNumber=15&page=1&sort=createdAt`
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
};
