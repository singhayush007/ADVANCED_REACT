import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    changeByValue: (state, action) => {
      console.log(action);
      state.value = action.payload; // changeByValue reducer action ke payload ko directly state ke value me set karta hai, RTK me ye Immer ki wajah se safe hota hai.
    },

    changeName: (state, action)=>{
      state.name = action.payload
    }
  },
});


export const {increment , decrement , changeByValue, changeName} = counterSlice.actions

export default counterSlice.reducer // RTK me reducers se actions auto-generate hote hain, isliye hum slice.actions export karte hain dispatch ke liye aur slice.reducer export karte hain store ke liye.
