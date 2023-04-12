import {
  currentThunk,
  logInThunk,
  logOutThunk,
  registerThunk,
} from './operationsLog';

const { createSlice } = require('@reduxjs/toolkit');

const log = createSlice({
  name: 'log',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoading: false,
    isLogIn: false,
    refresh: false,
  },
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(registerThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLogIn = true;
        state.token = payload.token;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLogIn = false;
        state.token = null;
        state.user.name = null;
        state.user.email = null;
      })

      .addCase(logInThunk.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLogIn = true;
        state.token = payload.token;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
      })
      .addCase(logInThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLogIn = false;
        state.token = null;
        state.user.name = null;
        state.user.email = null;
      })

      .addCase(currentThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(currentThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLogIn = true;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.refresh = true;
      })
      .addCase(currentThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLogIn = false;
        state.token = null;
        state.user.name = null;
        state.user.email = null;
        state.refresh = false;
      })

      .addCase(logOutThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.isLoading = false;
        state.isLogIn = false;
        state.token = null;
        state.user.name = null;
        state.user.email = null;
      })
      .addCase(logOutThunk.rejected, state => {
        state.isLoading = false;
        state.isLogIn = false;
        state.token = null;
        state.user.name = null;
        state.user.email = null;
      });
  },
});

// export const {} = contactsSlice.actions;
export default log.reducer;
