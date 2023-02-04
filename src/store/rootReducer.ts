import { combineReducers } from '@reduxjs/toolkit'
import galleryReducer from "./slices/gallerySlice"
import heroImgsReducer from "./slices/heroImgSlice"

export const rootReducer = combineReducers({
    gallery: galleryReducer,
    heroImgs: heroImgsReducer
})
export type RootState = ReturnType<typeof rootReducer>