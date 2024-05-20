import { Link, useParams } from "react-router-dom";
import Notes from "../../component/Notes/Notes";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./note.css";
import "/src/component/Sidebar/sidebar.css";
import plusButton from "/src/assets/Vector.svg";

function Note() {
  let { noteId } = useParams();
  const dataString = localStorage.getItem("notes");
  const data = JSON.parse(dataString);
  let note = data.find((element) => element.id === +noteId);

  return (
    <div className="note">
      <Sidebar />
      <div className={`content-wrapper ${noteId ? "column" : ""}`}>
        <Notes className={noteId ? "hidden" : ""} />
        {note && (
          <div className="note__content">
            <h1 className="note__title">{note.title}</h1>
            <p className="date__author">
              {note.date} / By {note.author}
            </p>
            <p>{note.content}</p>
            <Link to={"/addnote"}>
              <img
                src={plusButton}
                alt="Plus Button"
                className="plus__button"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Note;
