import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoritesSelector from "./components/favorisSlice";
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';


const reducers = combineReducers({ 
    favoris: favoritesSelector
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