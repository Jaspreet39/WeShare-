import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    bannerData:null,
    rideInfo:null,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null
    },
    setBannerData:(state,action) => {
      state.bannerData=action.payload;
    },
    setRideInfo:(state, action) => {
        state.rideInfo=action.payload;
    }
  },
})

export const { login, logout,setBannerData, setRideInfo} = userSlice.actions;


export const selectUser = (state) => state.user.user;
export const selectBannerData = (state) => state.user.bannerData;
export const selectRideInfo = (state) => state.user.rideInfo;

export default userSlice.reducer;
