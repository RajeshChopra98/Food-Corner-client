import { createReducer , createAction} from "@reduxjs/toolkit";


const loadUserRequest = createAction("loadUserRequest");
const loadUserSuccess = createAction("loadUserSuccess");
const loadUserFail = createAction("loadUserFail");
const logoutRequest = createAction("logoutRequest");
const logoutSuccess = createAction("logoutSuccess");
const logoutFail = createAction("logoutFail");
const clearError = createAction("clearError");
const clearMessage = createAction("clearMessage");



export const authReducer = createReducer({}, (builder) =>{

    builder.addCase( loadUserRequest, (state) => {
      state.loading = true;
    })

    .addCase(  loadUserSuccess, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })


    .addCase( loadUserFail, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })

    .addCase(  logoutRequest, (state) => {
      state.loading = true;
    })

    .addCase( logoutSuccess, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload;
      state.user = null;
    })

    .addCase( logoutFail, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    })

    .addCase( clearError, (state) => {
      state.error = null;
    })

    .addCase(  clearMessage, (state) => {
      state.message = null;
    })
});
