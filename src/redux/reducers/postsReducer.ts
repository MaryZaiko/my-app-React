import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "./../../common/types";

type PostState = {
  selectedImage: string;
  cardsList: Card[];
  postsTab: string;
  loadPosts: Card[];
  selectedPost: Card | null;
  isAllPostsLoading: boolean;
  isSinglePostLoading: boolean;
  myCardsList: Card[];



};

const initialState: PostState = {
  selectedImage: "",
  cardsList: [],
  postsTab: "allPosts",
  loadPosts: [],
  selectedPost: null,
  isAllPostsLoading: false,
  isSinglePostLoading:false,

  myCardsList:[]

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
    loadData: (state, action) => {},
    setPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    setAllPostsLoading: (state, action) => {
      state.isAllPostsLoading = action.payload;
    },
    setSinglePostLoading: (state, action) => {
      state.isSinglePostLoading = action.payload;
    },

    loadMyPosts: (state, action) => {},
    setMyPosts: (state, action: PayloadAction<Card[]>) => {
      state.myCardsList = action.payload.map((card: Card) => {
        return {
          ...card,
          likeStatus: null,
          saved: false,
        };
      });
    },
  },
});

export const {
  setSelectedImage,
  setPosts,
  setLikePost,
  setSavedPost,
  setPostsTab,
  loadPost,
  loadData,
  setPost,
  setAllPostsLoading,
  setSinglePostLoading,

  loadMyPosts,
  setMyPosts
} = postsSlice.actions;

export default postsSlice.reducer;

export const PostSelectors = {
  getSelectedImage: (state: any) => state.posts.selectedImage,
  getPostsTab: (state: any) => state.posts.postsTab,
  getCards: (state: any, filter: any, isPersonal: boolean) => {
    const cards = isPersonal ? state.posts.myCardsList : state.posts.cardsList;
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
  getSelectedPost: (state: any) => state.posts.selectedPost,
  getAllPostsLoading: (state: any) => state.posts.isAllPostsLoading,
  getSinglePostLoading: (state: any) => state.posts.isSinglePostLoading,
 

};
