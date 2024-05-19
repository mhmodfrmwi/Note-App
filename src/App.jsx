import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home/Home";
import { Route, Router, Routes } from "react-router-dom";
import AddNote from "./pages/addNote/AddNote";
import Note from "./pages/Note/Note";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addnote" element={<AddNote />} />
        <Route path="/note/:noteId" element={<Note />} />
      </Routes>
    </>
  );
}

export default App;
