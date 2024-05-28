import { createSlice } from '@reduxjs/toolkit';


export const ticketsSlice = createSlice({
    name: "tickets",
    initialState: {
        tickets: [],
    },
    reducers: {
        setTickets: (state, action) => {
            state.tickets = action.payload;
        }
    },
});

export const {setTickets} = ticketsSlice.actions;
export default ticketsSlice.reducer;
