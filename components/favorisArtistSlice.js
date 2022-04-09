import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";


const favorisArtistSlice = createSlice({
    name: "artists",
    initialState: [],
    reducers: {
        setFavoritesArtist: (state, action) => {
            let id = uuid();
            return [...state, { id: id, nom: action.payload.artistName, genre: action.payload.primaryGenreName }];
        },
        addNoteArtiste: (state, action) => {
            return state.map((item) => {
                if (action.payload.id == item.id)
                    item.note = action.payload.note;
            });
        }
    }
});

export const { setFavoritesArtist, addNoteArtiste } = favorisArtistSlice.actions;
export const favoriteArtistsSelector = (state) => state.artists;
// export const filteredFavoriteArtistsSelector = (state, id) => { return state.artists.filter((elm) => elm.id == id); };
export default favorisArtistSlice.reducer;