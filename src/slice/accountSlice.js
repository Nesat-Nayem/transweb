import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  account: [],
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    addAccount: (state, action) => {
      console.log("check action", action)
      state.account.push(action)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addAccount } = accountSlice.actions

export default accountSlice.reducer;