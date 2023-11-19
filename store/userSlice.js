import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    //   value: 0,
    clips: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addClip: (state, action) => {
            console.log("a");
            state.clips.push(action.payload);
        },
        deleteClip: (state, action) => {
            const after = state.clips.filter((x) => x.url !== action.payload.url);
            state.clips = after;
        },
    },
});

export const { addClip, deleteClip } = userSlice.actions

export default userSlice.reducer