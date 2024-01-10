import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

const UserSlice =createSlice({
    name:"Bhumika",
    initialState:{select:[]},
    reducers:{
        ADD_TO_CART:(state,action)=>
        {     
            if(state.select.length==0){
              state.select = [...state.select,action.payload.value] 
             console.log(action.payload.value);
            }
            else{
               const b =action.payload.value;

               const chk=state.select.filter((x)=>x.id==b.id)
               console.log(chk)
               if(chk.length==1){
                  alert("Already Added!")
                   
               }
               else{
                  state.select = [...state.select,action.payload.value]  
               }
            }
        
        },
         INC:(state,action)=>{
            const Id = action.payload.val.id
            for(let x of state.select){
               console.log(x.id)
               if(x.id===Id){
                   x.Qty = x.Qty+1;
                   console.log(x);
               }
            }
  
         },
         DEC:(state,action)=>{
          const id=action.payload.val.id
          state.select.map((e)=>{
            
            if(e.id==id){
               if(e.Qty==1){
                  return
               }
               else{
               e.Qty=e.Qty-1;
               console.log(e);
            }
            }
          })
         },
         REMOVE:(state,action)=>{
            state.select= state.select.filter((item)=>(item.id!==action.payload.id))
             
         }
         
      
    }

})

export const {ADD_TO_CART, add_to_wish,INC,DEC,REMOVE}= UserSlice.actions;
export default UserSlice.reducer;

