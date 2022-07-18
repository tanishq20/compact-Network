import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: localStorage.getItem('userId') || null,
  user: {},
  otherUser: {},
  allUsers: [],
  isLoggedIn: localStorage.getItem('userId') === null ? false : true,
  isAuthLoading: false,
  isFollowLoading: false,
  profileDetails: {},
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.id = action.payload
      state.isLoggedIn = true
    },
    userLogout: (state) => {
      state.id = null
      state.isLoggedIn = false
      localStorage.removeItem('userId')
    },
    loading: (state, action) => {
      state.isAuthLoading = action.payload
    },
  },
  extraReducers: {},
})

export const { userLogin, userLogout, loading } = authSlice.actions
export default authSlice.reducer
