import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { userReducer } from "@/features/userslice";

export const store :any = configureStore({
    reducer:{
        user:userReducer,
     
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch : () => AppDispatch = useDispatch

