import { configureStore } from "@reduxjs/toolkit";
import favoriteTracksReducer from "./components/favorisTrackSlice";
import favorisArtistReducer from "./components/favorisArtistSlice";
import trackReducer from './components/DetailSlice';

const store = configureStore({
    reducer: {
        tracks: favoriteTracksReducer,
        artists : favorisArtistReducer,
        track: trackReducer
    },
});

export default store;