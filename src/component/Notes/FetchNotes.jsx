import { useDispatch, useSelector } from "react-redux";
import deleteFromDatabase from "../../lib/utils/deleteFromDatabase";
import fetchFromDatabase from "../../lib/utils/fetchFromDatabase";
import { deleteNote } from "../../rtk/slices/notesSlice";
import "./notes.css";
import { useNavigate } from "react-router-dom";

function FetchNotes() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      {notes.map((note, index) => (
        <div
          className="Card"
          key={note.id}
          onClick={() => {
            navigate(`/note/${note.id}`);
          }}
        >
          <h2 className="card__title">{note.title}</h2>
          <p className="card__description">{note.content.slice(0, 60)}</p>
          <div className="bottom__container">
            <p className="card__date">{note.date}</p>
            <p
              className="card__button"
              onClick={() => {
                deleteFromDatabase("notes", index);
                dispatch(deleteNote(note.id));
                console.log(notes);
                navigate(`/`);
              }}
            >
              delete
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FetchNotes;
