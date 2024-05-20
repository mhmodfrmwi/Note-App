import { useDispatch, useSelector } from "react-redux";
import deleteFromDatabase from "../../lib/utils/deleteFromDatabase";
import fetchFromDatabase from "../../lib/utils/fetchFromDatabase";
import FetchNotes from "./FetchNotes";
import "/src/component/Sidebar/sidebar.css";
import "./notes.css";
import { deleteNote } from "../../rtk/slices/notesSlice";
import { useNavigate } from "react-router-dom";

function Notes({ className }) {
  let pinnedNote;
  let pinnedIndex;
  const notes = useSelector((state) => state.notes);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  notes.forEach((note, index) => {
    if (note.pinned) {
      pinnedNote = note;
      pinnedIndex = index;
    }
  });

  return (
    <div className={`notes ${className}`}>
      <p className="logo">PINNED</p>
      {pinnedNote && (
        <div
          className="Card"
          onClick={() => {
            navigate(`/note/${pinnedNote.id}`);
          }}
        >
          <h2 className="card__title">{pinnedNote.title}</h2>
          <p className="card__description">{pinnedNote.content.slice(0, 60)}</p>
          <div className="bottom__container">
            <p className="card__date">{pinnedNote.date}</p>
            <p
              className="card__button"
              onClick={() => {
                deleteFromDatabase("notes", pinnedIndex);
                dispatch(deleteNote(pinnedNote.id));
                navigate(`/`);
              }}
            >
              delete
            </p>
          </div>
        </div>
      )}
      <div className="notes_header">
        <h4 className="notes_header__title">Notes</h4>{" "}
      </div>
      <FetchNotes />
    </div>
  );
}

export default Notes;
