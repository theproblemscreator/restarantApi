import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : "counter",
    initialState : {value : 0},
    reducers : {
        increment : (state)=>{
            state.value += 1;
        },
        decrement : (state)=>{
            if(state.value > 0)
            {
                   state.value -= 1;
            }
         
        },
        incrementBy5 : (state,action)=>{
            state.value +=  action.payload;
        },
          reset : (state,action)=>{
            state.value = 0;
        },

    },
});


export const { increment , decrement , incrementBy5 , reset} = counterSlice.actions;
export default counterSlice.reducer;