import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 10
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            if(state.counter > 0){
                state.counter -= 1;
            }
        },
    }
})


export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
