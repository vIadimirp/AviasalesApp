import { createSlice } from '@reduxjs/toolkit';


export const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        current: "cheapest",
    },
    reducers: {
        setCheapest: state => {
            state.current = "cheapest";
        },
        setFastest: state => {
            state.current = "fastest";
        },
        setOptimal: state => {
            state.current = "optimal";
        },
    },
});

export const {setCheapest, setFastest, setOptimal} = filtersSlice.actions;
export default filtersSlice.reducer;
