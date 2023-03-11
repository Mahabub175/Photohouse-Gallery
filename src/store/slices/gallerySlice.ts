import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { base_url } from '../../configs';

const initialState: any = {
    galleryData: [],
    galleryDetails: {}
}

export const getGalleryData = createAsyncThunk('gallery/getGalleryList',
    async (thunkAPI) => {
        const res = await fetch(`${base_url}/all`).then((data) => data.json())
        return res.gallery.reverse()
    })

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        setGalleryDetails: (state, action: PayloadAction<number>) => {
            state.galleryDetails = state.galleryData[action.payload]
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getGalleryData.fulfilled, (state, { payload }) => {
            state.galleryData = payload
        })
    },
})

export const { setGalleryDetails } = gallerySlice.actions
// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.gallery.value
export default gallerySlice.reducer