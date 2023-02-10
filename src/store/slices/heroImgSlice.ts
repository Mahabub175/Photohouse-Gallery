import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// Define the initial state using that type
const initialState: any = {
    heroImgsData: [],
    sildes: [],
    imageArray: [],
    current: 0

}
export const getheroImgsData = createAsyncThunk('heroImgs/getheroImgs',
    async (thunkAPI) => {
        const res = await fetch('https://api.photohousemagazine.com/home_slider_images').then((data) => data.json())
        return res.reverse()
    })

export const heroImgsSlice = createSlice({
    name: 'heroImgs',
    initialState,
    reducers: {
        setHeroImgData: (state, action: PayloadAction<any>) => {
            state.heroImgsData = action.payload
            state.sildes = action.payload.slice(0, 3)
            state.imageArray = action.payload
        },
        setSlidesNext: (state, action: PayloadAction<any>) => {
            state.sildes = action.payload.slice(state.current + 1, (state.current + 3) + 1)
            state.current = state.current + 1
        },
        setSlidesPrev: (state, action: PayloadAction<any>) => {
            state.sildes = action.payload.slice(state.current - 1, (state.current + 3) - 1)
            state.current = state.current - 1
        }
    }
})
export const { setHeroImgData, setSlidesNext, setSlidesPrev } = heroImgsSlice.actions
export default heroImgsSlice.reducer