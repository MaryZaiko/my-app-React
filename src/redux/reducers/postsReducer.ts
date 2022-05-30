import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { castDraft } from "immer";
import { Card } from "./../../common/types";

type PostState = {
  selectedImage: string;
  cardsList: Card[];
  postsTab: string;
  loadPosts: Card[];
  selectedPost: Card | null;



  isAllPostsLoading: boolean
};

const initialState: PostState = {
  selectedImage: "",
  cardsList: [],
  postsTab: "allPosts",
  loadPosts: [],
  selectedPost: null,
  isAllPostsLoading:false
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSelectedImage: (state: Draft<PostState>, action) => {
      state.selectedImage = action.payload;
    },
    setPosts: (state, action: PayloadAction<Card[]>) => {
      state.cardsList = action.payload.map((card: Card) => {
        return {
          ...card,
          likeStatus: null,
          saved: false,
        };
      });
    },
    loadData: (state, action: PayloadAction<undefined>) => {},

    setLikePost: (state: any, action) => {
      const card = state.cardsList.find((c: any) => c.id === action.payload.id);
      if (card) {
        card.likeStatus = action.payload.action;
      }
    },
    setSavedPost: (state: any, action) => {
      const card = state.cardsList.find((c: any) => c.id === action.payload.id);
      if (card) {
        card.saved = action.payload.action === "save";
      }
    },
    setPostsTab: (state, action) => {
      state.postsTab = action.payload;
    },
    loadPost: (state, action) => {},
    setPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    setAllPostsLoading:(state, action) =>{ //load all posts from api
      state.isAllPostsLoading =action.payload
    }
  },
});

export const {
  setSelectedImage,
  setPosts,
  setLikePost,
  setSavedPost,
  setPostsTab,
  loadData,
  loadPost,
  setPost,
  setAllPostsLoading
} = postsSlice.actions;

export default postsSlice.reducer;

export const PostSelectors = {
  getSelectedImage: (state: any) => state.posts.selectedImage,
  getPostsTab: (state: any) => state.posts.postsTab,
  getCards: (state: any, filter: any) => {
    const cards = state.posts.cardsList;
    switch (filter) {
      case "likedPosts":
        return cards.filter((item: any) => item.likeStatus === "like");
      case "dislikedPosts":
        return cards.filter((item: any) => item.likeStatus === "dislike");
      case "savedPosts":
        return cards.filter((item: any) => item.saved);
      case "allPosts":
        return cards;
      default:
        return cards;
    }
  },
  getSelectedPost:(state:any) =>state.posts.selectedPost,
  getAllPostsLoading:(state:any) =>state.posts.isAllPostsLoading,
};
