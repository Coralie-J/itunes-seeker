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
            let alreadyPresent = state
                .map((elm) => elm.id)
                .includes(action.payload.id);

            if (alreadyPresent) {
                return state.map((item) =>
                    item.id == action.payload.id
                        ? { ...item, note: action.payload.note }
                        : item
                );
            } else {
                return state;
            }
            /*return state.map((item) => {
                action.payload.id == item.id ? { ...item, note: action.payload.note } : item;
            });*/
        },
    }
});

export const { addFavoriteTrack, addNote } = favorisTracksSlice.actions;
export const favoriteTracksSelector = (state) => state.tracks;
export default favorisTracksSlice.reducer;