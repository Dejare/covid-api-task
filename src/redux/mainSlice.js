import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("main/fetchMain", async () => {
    return fetch("https://covidnigeria.herokuapp.com/api").then((res) =>
        res.json()
    ).catch((e) => console.log(e))

});

export const mainSlice = createSlice({
    name: "main",
    initialState: {
        currentPost: {
            value: {
                name: 'Loading...'
            }
        },
        isLoading: null,
        data: [],
    },
    extraReducers: {
        [fetchData.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchData.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        [fetchData.rejected]: (state, action) => {
            state.isLoading = false;
        },
    },
});

// export const { setLoading } = mainSlice.actions;
export default mainSlice.reducer;
