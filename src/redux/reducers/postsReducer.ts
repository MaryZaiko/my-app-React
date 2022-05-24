import { createSlice, Draft } from "@reduxjs/toolkit";
import { castDraft } from "immer";
import { Card } from "./../../common/types";

type PostState = {
  selectedImage: string;
  cardsList: Card[];
  postsTab: string;
};

const initialState: PostState = {
  selectedImage: "",
  cardsList: [],
  postsTab: "allPosts",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSelectedImage: (state: Draft<PostState>, action) => {
      state.selectedImage = action.payload;
    },
    loadData: (state, action) => {
      state.cardsList = action.payload.map((card: Card) => {
        return {
          ...card,
          likeStatus: null,
          saved: false,
        };
      });
    },

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
  },
});

export const {
  setSelectedImage,
  loadData,
  setLikePost,
  setSavedPost,
  setPostsTab,
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
};
