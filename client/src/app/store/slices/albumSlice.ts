import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Allalbums } from "../../types/users";

interface albumsState {
  albums: Allalbums[] | "";
}

const initialState: albumsState = {
  albums: "",
};

export const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    fetchalbums(state, action) {
      state.albums = action.payload;
    },
  },
});

export const { fetchalbums } = albumsSlice.actions;

export const selectalbums = (state: RootState) => state.albums;

export default albumsSlice.reducer;
