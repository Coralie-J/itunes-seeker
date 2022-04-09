import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const favorisTracksSlice = createSlice({
    name: "favoris",
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
        addFavoriteArtiste: (state, action) => {
            let id = uuid();
            return [...state, { id: id, nom: action.payload.artistName, genre: action.payload.primaryGenreName, type: "artist" }];
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
        },
    }
});

export const { addFavoriteTrack, addNote, addFavoriteArtiste } = favorisTracksSlice.actions;
export const favoritesSelector = (state) => state.favoris;
export const favoritesArtistsSelector = (state) => state.favoris.filter((elm) => elm.type == "artist");
export const favoritesTracksSelector = (state) => state.favoris.filter((elm) => elm.type != "artist");
export default favorisTracksSlice.reducer;