import { createSlice } from '@reduxjs/toolkit';

const NAME = 'Gallery';

const initialState={
    images:[],
    selectedImage:null
};

const GallerySlice = createSlice({
    name:NAME,
    initialState,
    reducers:{
        setImages:(state,action)=>{
            state.images = action.payload
        },
        setSelected:(state,action)=>{
            state.selectedImage = action.payload;
        }
    }
});

const {reducer,actions} = GallerySlice;
export const GalleryActions = actions;
export default reducer;