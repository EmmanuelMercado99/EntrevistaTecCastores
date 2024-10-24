import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: []
};

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(video => video.id.videoId !== action.payload.id.videoId);
        }
    }
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
