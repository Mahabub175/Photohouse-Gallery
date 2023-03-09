import { combineReducers } from '@reduxjs/toolkit'
import galleryReducer from "./slices/gallerySlice"

export const rootReducer = combineReducers({
    gallery: galleryReducer
})
export type RootState = ReturnType<typeof rootReducer>