import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./slices/notesSlice";

export default configureStore({
  reducer: {
    notes: notesSlice,
  },
});
