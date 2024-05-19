import "./addnote.css";
import Sidebar from "../../component/Sidebar/Sidebar";
function AddNote() {
  return (
    <>
      <Sidebar />
      <form action="" className="addnote">
        <h1>Add Note</h1>
        <label>title</label>
        <input id="title" type="textarea" required />
        <label>Author</label>
        <input id="author" type="textarea" required />
        <label>Your Note</label>
        <textarea id="note" name="w3review" rows="4" cols="50"></textarea>

        <div className="buttons__container">
          <button type="submit" className="add_note">
            Add Note
          </button>
          <button type="submit" className="add_pinned">
            Add Pinned Note
          </button>
        </div>
      </form>
    </>
  );
}
export default AddNote;
