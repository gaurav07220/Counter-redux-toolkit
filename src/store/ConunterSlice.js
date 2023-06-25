import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  num: 0,
};
const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.num += action.payload;
    },
    decrement(state, action) {
      state.num <=0?state.num = 0:state.num -= action.payload;
    },
    reset(state,action){
        state.num = 0
    }
  },
});

export const { increment, decrement ,reset } = CounterSlice.actions;
export default CounterSlice.reducer;
