import { createSlice } from '@reduxjs/toolkit';


export const searchIdSlice = createSlice({
    name: "searchId",
    initialState: {
        searchId: "",
    },
    reducers: {
        setSearchId: (state, action) => {
            state.searchId = action.payload;
        }
    },
});

export const {setSearchId} = searchIdSlice.actions;
export default searchIdSlice.reducer;
