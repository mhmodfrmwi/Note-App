import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import fetchFromDatabase from "../../lib/utils/fetchFromDatabase";

const notesSlice = createSlice({
  initialState: fetchFromDatabase("notes") || [],
  name: "notes",
  reducers: {
    addNote: (state, action) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Note has been Added",
        showConfirmButton: false,
        timer: 1500,
      });
      state.push(action.payload);
    },
    deleteNote: (state, action) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Note has been deleted",
        showConfirmButton: false,
        timer: 1500,
      });
      return state.filter((note) => note.id !== action.payload);
    },
  },
});
export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
