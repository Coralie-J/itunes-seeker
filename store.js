import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoriteTracksReducer from "./components/favorisTrackSlice";
import favorisArtistReducer from "./components/favorisArtistSlice";
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';


const reducers = combineReducers({ 
    tracks: favoriteTracksReducer, 
    artists: favorisArtistReducer
 });

 const persistConfig = {
    key: "root",
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig,reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export default store;