import { createReducer , createAction} from "@reduxjs/toolkit";


const createOrderRequest = createAction("createOrderRequest");
const createOrderSuccess = createAction("createOrderSuccess");
const createOrderFail = createAction("createOrderFail");
const paymentVerificationRequest = createAction("paymentVerificationRequest");
const paymentVerificationSuccess = createAction("paymentVerificationSuccess");
const paymentVerificationFail = createAction("paymentVerificationFail");
const clearError = createAction("clearError");
const clearMessage = createAction("clearMessage");




export const orderReducer = createReducer({}, (builder) =>{

  builder.addCase(createOrderRequest, (state) => {
      state.loading = true;
  })

  .addCase(createOrderSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
  })

  .addCase(createOrderFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
  })

  .addCase(paymentVerificationRequest, (state) => {
      state.loading = true;
  })

  .addCase(paymentVerificationSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
  })

  .addCase(paymentVerificationFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
  })

  .addCase(clearMessage, (state) => {
      state.message = null;
  })

  .addCase(clearError, (state) => {
      state.error = null;
  })
});




const getMyOrdersRequest = createAction("getMyOrdersRequest");
const getMyOrdersSuccess = createAction("getMyOrdersSuccess");
const getMyOrdersFail = createAction("getMyOrdersFail");
const getOrderDetailsRequest = createAction("getOrderDetailsRequest");
const getOrderDetailsSuccess = createAction("getOrderDetailsSuccess");
const getOrderDetailsFail = createAction("getOrderDetailsFail");



export const ordersReducer = createReducer({ orders: [] }, (builder)=> {

  builder.addCase( getMyOrdersRequest, (state) => {
      state.loading = true;
  })

  .addCase( getMyOrdersSuccess, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
  })

  .addCase( getMyOrdersFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
  })

  .addCase( getOrderDetailsRequest, (state) => {
      state.loading = true;
  })
   
  .addCase( getOrderDetailsSuccess, (state, action) => {
      state.loading = false;
      state.order = action.payload;
  }) 

  .addCase( getOrderDetailsFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
  })

  .addCase( clearError, (state) => {
      state.error = null;
  })

  .addCase( clearMessage, (state) => {
      state.message = null;
  })
   
});
