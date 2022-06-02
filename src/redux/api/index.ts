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

const registerUser = (userData: UserType) => {
  return API.post("/auth/users/", userData);
};

export { getPosts, getSinglePost,registerUser };
