import { createSlice } from '@reduxjs/toolkit';


const checkAll = state => {
    if (state.noTransfers && state.oneTransfer && state.twoTransfers && state.threeTransfers) {
        state.all = true;
        return;
    }

    state.all = false;
}


export const checkboxesSlice = createSlice({
    name: "checkboxes",
    initialState: {
        all: false,
        noTransfers: false,
        oneTransfer: false,
        twoTransfers: false,
        threeTransfers: false,
    },
    reducers: {
        updateAll: state => {
            state.all = !state.all;

            state.noTransfers = state.all;
            state.oneTransfer = state.all;
            state.twoTransfers = state.all;
            state.threeTransfers = state.all;
        },
        updateNoTransfers: state => {
            state.noTransfers = !state.noTransfers;
            checkAll(state);
        },
        updateOneTransfer: state => {
            state.oneTransfer = !state.oneTransfer;
            checkAll(state);
        },
        updateTwoTransfers: state => {
            state.twoTransfers = !state.twoTransfers;
            checkAll(state);
        },
        updateThreeTransfers: state => {
            state.threeTransfers = !state.threeTransfers;
            checkAll(state);
        },
    },
});

export const {updateAll, updateNoTransfers, updateOneTransfer, updateTwoTransfers, updateThreeTransfers} = checkboxesSlice.actions;
export default checkboxesSlice.reducer;
