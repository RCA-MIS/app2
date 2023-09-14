import { RootState } from "../store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";



const initialState : any = {
user:{}
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setLoggedInSuccessfully : (state:RootState, {...payload}) =>{
            console.log(`here is the payload ${{...payload}}`)
      state.user = {...payload} ;
        }      
    }
})

export const {setLoggedInSuccessfully} = userSlice.actions;
export const userReducer = userSlice.reducer