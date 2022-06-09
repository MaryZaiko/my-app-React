import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RegisterUser = {
  name: string;
  email: string;
  password: string;
  callback: () => void;
};

export type AuthReducerStateType = {
  isLoggedIn: boolean;
  tempMail: string;
  authUserName: string;
  isLoginUserLoading: boolean;
};

const initialState = {
  isLoggedIn:
    !!localStorage.getItem("jwtAccessToken") ||
    !!localStorage.getItem("jwtRefreshToken"),
  tempMail: "",
  authUserName: "",
  isLoginUserLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisterUser>) => {},
    userActivate: (state, action: any) => {},
    setLogStatus: (state: any, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setTempMail: (state, action: PayloadAction<string>) => {
      state.tempMail = action.payload;
    },
    loginUser: (
      state: any,
      action: PayloadAction<{ email: string; password: string }>
    ) => {},
    setIsLoginUserLoading: (state, action) => {
      state.isLoginUserLoading = action.payload;
    },


    // getUserInfo: (state, action: any) => {},
    // setAuthUserName: (state, action: PayloadAction<string>) => {
    //   state.authUserName = action.payload;
    // },
  },
});

export const {
  registerUser,
  setLogStatus,
  setTempMail,
  userActivate,
  loginUser,
  // getUserInfo,
  // setAuthUserName,
  setIsLoginUserLoading
} = authSlice.actions;
export default authSlice.reducer;
export const AuthSelector = {
  getLogStatus: (state: any) => state.auth.isLoggedIn,
  getTempMail: (state: any) => state.auth.tempMail,
  // getAuthUserName: (state: any) => state.auth.authUserName,
  // getIsLoginUserLoading:(state:any) =>state.auth.isLoginUserLoading
};
