import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import img1 from "../../Images/Gallery/1.png";
import imgL from "../../Images/Landscape/land04.png";
// Define the initial state using that type
const initialState: any = {
    galleryData: [],
    galleryDetails: {}
}
export const getGalleryData = createAsyncThunk('gallery/getGallery',
    async (thunkAPI) => {
        const res = await fetch('https://api.photohousemagazine.com/gallery').then((data) => data.json())
        return res.reverse()
    })

export const gallerySlice = createSlice({
    name: 'gallery',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // getGalleryData: (state) => {
        //     state.galleryData = []
        // },
        setGalleryDetails: (state, action: PayloadAction<number>) => {
            state.galleryDetails = state.galleryData[action.payload]
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getGalleryData.fulfilled, (state, { payload }) => {
            // Add user to the state array
            console.log(payload)
            state.galleryData = payload
        })
    },
})

export const { setGalleryDetails } = gallerySlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.gallery.value

export default gallerySlice.reducer