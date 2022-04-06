import { createSlice } from "@reduxjs/toolkit";

const trackSlice = createSlice({
    name: "result",
    initialState: {},
    reducers: {
        setTrack: (state, action) => {
            return action.payload;
        },
        
    }
});

export const { setTrack } = trackSlice.actions;
export const TrackSelector = (state) => state.result;
export default trackSlice.reducer;