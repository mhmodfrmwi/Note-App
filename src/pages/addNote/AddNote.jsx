import "./addnote.css";
import Sidebar from "../../component/Sidebar/Sidebar";
import { useState } from "react";
import { saveToDatabase } from "../../lib/utils/saveToDataBase";
import fetchFromDatabase from "../../lib/utils/fetchFromDatabase";
import { useDispatch } from "react-redux";
import { addNote } from "../../rtk/slices/notesSlice";

function AddNote() {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteAuthor, setNoteAuthor] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    e.preventDefault();
    setNoteTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    e.preventDefault();
    setNoteAuthor(e.target.value);
  };

  const handleContent = (e) => {
    e.preventDefault();
    setNoteContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const buttonName = e.nativeEvent.submitter.name;
    const options = { year: "numeric", month: "short", day: "numeric" };
    const Notes = fetchFromDatabase("notes") || [];
    const note = {
      title: noteTitle,
      author: noteAuthor,
      content: noteContent,
      date: new Date().toLocaleDateString("en-US", options),
      id: Notes.length + 1,
    };

    if (buttonName === "add_note") {
      note.pinned = false;
    } else {
      Notes.forEach((note) => {
        if (note.pinned === true) {
          note.pinned = false;
        }
      });
      note.pinned = true;
    }
    Notes.push(note);
    dispatch(addNote(note));
    saveToDatabase("notes", Notes);
  };

  return (
    <div className="addNoteContainer">
      <Sidebar />
      <form onSubmit={handleSubmit} className="addnote">
        <h1>Add Note</h1>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" required onChange={handleTitle} />
        <label htmlFor="author">Author</label>
        <input id="author" type="text" required onChange={handleAuthor} />
        <label htmlFor="note">Your Note</label>
        <textarea id="note" rows="4" required onChange={handleContent} />
        <div className="buttons__container">
          <button type="submit" name="add_note" className="add_note">
            Add Note
          </button>
          <button type="submit" name="add_pinned" className="add_pinned">
            Add Pinned Note
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNote;
