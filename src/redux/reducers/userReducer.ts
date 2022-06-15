import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthReducerStateType = {
  authUserName: string;
  isLoginUserLoading: boolean;
};

const initialState = {
  authUserName: "",
  isLoginUserLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoginUserLoading: (state, action) => {
      state.isLoginUserLoading = action.payload;
    },

    getUserInfo: (state, action: any) => {},
    setAuthUserName: (state, action: PayloadAction<string>) => {
      state.authUserName = action.payload;
    },
  },
});

export const { getUserInfo, setAuthUserName, setIsLoginUserLoading } =
  authSlice.actions;

export default authSlice.reducer;

export const UserSelector = {
  getAuthUserName: (state: any) => state.user.authUserName,
  getIsLoginUserLoading: (state: any) => state.user.isLoginUserLoading,
};
