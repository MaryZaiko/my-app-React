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

const userActivateApi = (uid: string, token: string ) => {
  return API.post("/auth/users/activation/", { uid, token });
};
const loginUserApi = (data: { email: string, password: string}) => {
  return API.post("/auth/jwt/create/", data)
}

const getUserInfoApi = ( token: any) => {
  return API.get('/auth/users/me/', {}, { headers: {
      "Authorization": `Bearer ${token}`,
    } });
};
export { getPosts, getSinglePost, registerUserApi, userActivateApi, loginUserApi, getUserInfoApi };
