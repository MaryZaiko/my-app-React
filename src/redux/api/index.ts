import { create } from "apisauce";
const API = create({
  baseURL: "https://studapi.teachmeskills.by",
});

type UserType = {
  username: string;
  password: string;
  email: string;
};

const getPosts = () => {
  return API.get("/blog/posts/");
};

const getSinglePost = (id: string) => {
  return API.get(`/blog/posts/${id}/`);
};

const registerUserApi = (userData: UserType) => {
  return API.post("/auth/users/", userData);
};

const userActivateApi = (uid: string, token: string) => {
  return API.post("/auth/users/activation/", { uid, token });
};
const loginUserApi = (data: { email: string; password: string }) => {
  return API.post("/auth/jwt/create/", data);
};

const getUserInfoApi = (token: string) => {
  return API.get(
    "/auth/users/me/",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
const verifyToken = (token: string) => {
  return API.post("/auth/jwt/verify/", { token });
};
const getNewAccessToken = (refresh: string) => {
  return API.post("/auth/jwt/refresh/", { refresh });
};
const getMyPosts = (token: string) => {
  return (
    API.get("/blog/posts/my_posts/"),
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export {
  getPosts,
  getSinglePost,
  registerUserApi,
  userActivateApi,
  loginUserApi,
  getUserInfoApi,
  verifyToken,
  getNewAccessToken,
  getMyPosts,
};
