import { createSlice, Draft } from "@reduxjs/toolkit";
import { Card } from "./../../common/types";

type PostState = {
    selectedPost: Card | null;
    selectedImage:string;
}

const initialState: PostState = {
  selectedPost: null,
  selectedImage:'',
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
      setSelectedPost:(state:Draft<PostState>, action) =>{
          state.selectedPost = action.payload
      },
      setSelectedImage:(state:Draft<PostState>, action) =>{
        state.selectedImage = action.payload
    }
  },
});


export const {setSelectedPost, setSelectedImage} = postsSlice.actions


export default postsSlice.reducer;


export const PostsSelectors = { // 'это для получения значения из стейта?
    getSelectedPost:(state:any) => state.posts.selectedPost,
}
export const ImageSelectors = {
  getSelectedImage:(state:any) => state.posts.selectedImage,
}