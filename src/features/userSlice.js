import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    bannerData:null
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null
    },
    setBannerData:(state,action)=>{
      state.bannerData=action.payload;
    }
  },
})

export const { login, logout,setBannerData } = userSlice.actions;


export const selectUser = (state) => state.user.user;
export const selectBannerData = (state) => state.user.bannerData;

export default userSlice.reducer;
