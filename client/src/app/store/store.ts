import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./slices/userSlice";
import { albumsSlice } from "./slices/albumSlice";
import { photosSlice } from "./slices/photoSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      users: usersSlice.reducer,
      photos: photosSlice.reducer,
      albums: albumsSlice.reducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
