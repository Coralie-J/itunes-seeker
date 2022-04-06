import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const favorisTracksSlice = createSlice({
    name: "tracks",
    initialState: [],
    reducers: {
        addFavoriteTrack: (state, action) => {
            let id = uuid();
            return [...state, {
                id: id,
                titre: action.payload.trackName,
                album: action.payload.collectionName,
                genre: action.payload.primaryGenreName,
                artiste: action.payload.artistName,
                image: action.payload.artworkUrl100,
                type: action.payload.kind
            }];
        },
        addNote: (state, action) => {
            return state.map((item) => {
                if (action.payload.id == item.id)
                    item.note = action.payload.note;
            });
        }
    }
});

export const { addFavoriteTrack, addNote } = favorisTracksSlice.actions;
export const favoriteTracksSelector = (state) => state.tracks;
export default favorisTracksSlice.reducer;