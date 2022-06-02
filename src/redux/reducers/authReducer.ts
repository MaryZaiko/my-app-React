import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RegisterUser = {
  name: string;
  email: string;
  password: string;
  callback:()=>void;
};

export type AuthReducerStateType = {
  isLoggedIn: boolean;
  tempMail:string;
};

const initialState = {
  isLoggedIn: !!localStorage.getItem("isLoggedIn"),
  tempMail:'',
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<RegisterUser>) => {},
    setLogStatus: (state: any, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setTempMail:(state, action: PayloadAction<string>) =>{
      state.tempMail = action.payload;
    }
  },
});

export const { registerUser, setLogStatus,setTempMail } = authSlice.actions;
export default authSlice.reducer;
export const AuthSelector = {
  getLogStatus: (state: any) => state.auth.isLoggedIn,
  getTempMail: (state: any) => state.auth.tempMail,
};
