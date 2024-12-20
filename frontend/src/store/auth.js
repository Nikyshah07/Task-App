import { createSlice } from "@reduxjs/toolkit";
const authslice=createSlice({
    name:"auth",
    initialState:{islogin:false},
    reducers:{
        login(state){
            state.islogin=true;
        },
        logout(state)
        {
            state.islogin=false
        }
    }
})
export const authactions=authslice.actions;
export default authslice.reducer