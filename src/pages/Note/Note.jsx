import { Link, useParams } from "react-router-dom";
import Notes from "../../component/Notes/Notes";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./note.css";
import { Images } from "../../lib/images";
function Note() {
  let { noteId } = useParams();
  console.log(noteId);
  const dataString = localStorage.getItem("notes");
  const data = JSON.parse(dataString);
  console.log(data);
  let note = data.find((element) => element.id === +noteId);
  console.log(note);
  return (
    <div className="note">
      <Sidebar />
      <Notes />
      {note && (
        <div className="note__content">
          <h1 className="note__title">{note.title}</h1>
          <p className="date__author">
            {note.date} / By {note.author}
          </p>
          <p>{note.content}</p>
          <Link to={"/addnote"}>
            <img
              src={Images.plusButton[0]}
              alt="Plus Button"
              className="plus__button"
            />
          </Link>
        </div>
      )}
    </div>
  );
}
export default Note;
