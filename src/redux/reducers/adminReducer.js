import { createAction, createReducer } from "@reduxjs/toolkit";


const getDashboardStatsRequest = createAction("getDashboardStatsRequest");
const getDashboardStatsSuccess = createAction("getDashboardStatsSuccess");
const getDashboardStatsFail = createAction("getDashboardStatsFail");
const getAdminUsersRequest = createAction("getAdminUsersRequest");
const getAdminUsersSuccess = createAction("getAdminUsersSuccess");
const getAdminUsersFail = createAction("getAdminUsersFail");
const getAdminOrdersRequest = createAction("getAdminOrdersRequest");
const getAdminOrdersSuccess = createAction("getAdminOrdersSuccess");
const getAdminOrdersFail = createAction("getAdminOrdersFail");
const processOrderRequest = createAction("processOrderRequest");
const processOrderSuccess = createAction("processOrderSuccess");
const processOrderFail = createAction("processOrderFail");
const clearError = createAction("clearError");
const clearMessage = createAction("clearMessage");



export const adminReducer = createReducer(
  { orders: [], users: [] },
  (builder) =>{
    builder.addCase( getDashboardStatsRequest, (state) => {
      state.loading = true;
    })
    
    .addCase(getDashboardStatsSuccess, (state, action) => {
      state.loading = false;
      state.usersCount = action.payload.usersCount;
      state.ordersCount = action.payload.ordersCount;
      state.totalIncome = action.payload.totalIncome;
    })

    .addCase( getDashboardStatsFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase( getAdminUsersRequest, (state) => {
      state.loading = true;
    })
   
    .addCase( getAdminUsersSuccess, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
   
    .addCase(getAdminUsersFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
   
    .addCase(  getAdminOrdersRequest, (state) => {
      state.loading = true;
    })
    
    .addCase( getAdminOrdersSuccess, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    })
  
    .addCase(getAdminOrdersFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase( processOrderRequest, (state) => {
      state.loading = true;
    })

    .addCase( processOrderSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    
    .addCase( processOrderFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
   
    .addCase( clearError, (state) => {
      state.error = null;
    })  

    .addCase( clearMessage, (state) => {
      state.message = null;
    })
  }
);
