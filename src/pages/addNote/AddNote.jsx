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
    console.log(noteTitle);
  };
  const handleAuthor = (e) => {
    e.preventDefault();
    setNoteAuthor(e.target.value);
    console.log(noteAuthor);
  };
  const handleContent = (e) => {
    e.preventDefault();
    setNoteContent(e.target.value);
    console.log(noteContent);
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
      Notes.map((note) => {
        if (note.pinned === true) {
          note.pinned = false;
        }
      });
      note.pinned = true;
    }
    Notes.push(note);
    dispatch(addNote(note));
    console.log(Notes);
    saveToDatabase("notes", Notes);
  };
  return (
    <>
      <Sidebar />
      <form onSubmit={handleSubmit} className="addnote">
        <h1>Add Note</h1>
        <label>title</label>
        <input id="title" type="textarea" required onChange={handleTitle} />
        <label>Author</label>
        <input id="author" type="textarea" required onChange={handleAuthor} />
        <label>Your Note</label>
        <textarea
          id="note"
          name="w3review"
          rows="4"
          cols="50"
          onChange={handleContent}
        />
        <div className="buttons__container">
          <button type="submit" name="add_note" className="add_note">
            Add Note
          </button>
          <button type="submit" name="add_pinned" className="add_pinned">
            Add Pinned Note
          </button>
        </div>
      </form>
    </>
  );
}
export default AddNote;
