import { createSlice } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";
 

const Order =createSlice({
  name:"orders",
    initialState:{orders:[]},
    reducers:{
      ORD:(state,action)=>{
        state.orders=[...state.orders,action.payload.value];
      },
      RMV:(state,action)=>{
        state.orders = state.orders.filter((item)=>(item.id!==action.payload.id))
         
     }
    }
})

export const{ORD,RMV}=Order.actions;
export default Order.reducer;


