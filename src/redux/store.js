import { configureStore } from '@reduxjs/toolkit';
import checkboxesReducer from "./slices/checkboxes/checkboxesSlice";
import searchIdReducer from "./slices/searchId/searchIdSlice";
import ticketsReducer from "./slices/tickets/ticketsSlice";
import filtersReducer from "./slices/filters/filtersSlice";


export const store = configureStore({
    reducer: {
        checkboxes: checkboxesReducer,
        searchId: searchIdReducer,
        tickets: ticketsReducer,
        filters: filtersReducer,
    },
});
