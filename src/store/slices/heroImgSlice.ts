import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// Define the initial state using that type
const initialState: any = {
    heroImgsData: []
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
        }
    }
})
export const { setHeroImgData } = heroImgsSlice.actions
export default heroImgsSlice.reducer